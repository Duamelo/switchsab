import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Souscription from './souscription.entity';
import { Repository } from 'typeorm';
import souscriptionDto from './dto/souscriptionDto.dto';
import User from '../users/user.entity';
import Tarif from '../tarifs/tarif.entity';

@Injectable()
export class SouscriptionsService {
  constructor(
    @InjectRepository(Souscription)
    private souscriptionsRepository: Repository<Souscription>,
    @InjectRepository(Tarif)
    private tarifsRepository: Repository<Tarif>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async index() {
    return this.souscriptionsRepository.find();
  }

  public async create(souscriptionData: souscriptionDto) {
    const tarif = await this.tarifsRepository.findOne({
      where: {
        id: souscriptionData.tarifId,
      },
      relations: {
        groupe: true,
      },
    });
    const client = await this.usersRepository.findOne({
      where: { id: souscriptionData.clientId },
    });
    if (tarif && client) {
      const oldSouscriptions = await this.souscriptionsRepository.find({
        where: {
          clientId: client.id,
          groupeId: tarif.groupe.id,
        },
      });
      let dureeAncienne = 0;

      if (oldSouscriptions) {
        oldSouscriptions.forEach((oldSouscription) => {
          dureeAncienne = oldSouscription.dureeRestante;
        });
      }

      const montant = tarif.montant;
      const dureeRestante = tarif.duree + dureeAncienne;
      const groupeId = tarif.groupe.id;
      const duree = tarif.duree;
      const clientId = client.id;

      const newSouscription = await this.souscriptionsRepository.create({
        clientId,
        groupeId,
        duree,
        montant,
        dureeRestante,
      });

      await this.souscriptionsRepository.save(newSouscription);
      return newSouscription;
    }
    throw new HttpException(
      'Tarif or client with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async getById(id: number) {
    const souscription = await this.souscriptionsRepository.findOneBy({ id });
    if (souscription) {
      return souscription;
    }
    throw new HttpException(
      'Souscription with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
}
