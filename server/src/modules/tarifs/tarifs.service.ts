import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Tarif from './tarif.entity';
import { Repository } from 'typeorm';
import Groupe from '../groupes/groupe.entity';
import tarifCreateDto from './dto/tarifCreateDto.dto';
import tarifDto from './dto/tarifDto.dto';

@Injectable()
export class TarifsService {
  constructor(
    @InjectRepository(Tarif)
    private tarifsRepository: Repository<Tarif>,
    @InjectRepository(Groupe)
    private groupesRepository: Repository<Groupe>,
  ) {}

  public async index() {
    return this.tarifsRepository.find({
      relations: {
        groupe: true,
      },
    });
  }

  public async create(tarifData: tarifCreateDto) {
    const groupe = await this.groupesRepository.findOne({
      where: { id: tarifData.groupeId },
    });
    if (groupe) {
      const tarif: tarifDto = tarifData;

      const newTarif = await this.tarifsRepository.create({
        ...tarif,
        groupe: {
          id: groupe.id,
        },
      });

      await this.tarifsRepository.save(newTarif);
      return newTarif;
    }
    throw new HttpException(
      'Groupe with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async getById(id: number) {
    const tarif = await this.tarifsRepository.findOneBy({ id });
    if (tarif) {
      return tarif;
    }
    throw new HttpException(
      'Tarif with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async update(id: number, tarifData: tarifCreateDto) {
    const groupe = await this.groupesRepository.findOne({
      where: { id: tarifData.groupeId },
    });

    if (groupe) {
      tarifData.groupeId = undefined;

      this.tarifsRepository.update(id, { ...tarifData });

      const tarif = await this.getById(id);

      if (tarif) {
        tarif.groupe = groupe;
        await tarif.save();

        return tarif;
      }

      throw new HttpException(
        'Tarif with this id does not exist',
        HttpStatus.NOT_FOUND,
      );
    }
    throw new HttpException(
      'Groupe with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async delete(id: number) {
    return this.tarifsRepository.delete(id);
  }
}
