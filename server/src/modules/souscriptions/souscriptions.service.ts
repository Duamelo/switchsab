import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import Souscription from './souscription.entity';
import { Repository } from 'typeorm';
import souscriptionDto from './dto/souscriptionDto.dto';
import Categorie from '../categories/categorie.entity';
import User from '../users/user.entity';


@Injectable()
export class SouscriptionsService {
  constructor(
    @InjectRepository(Souscription)
    private souscriptionsRepository: Repository<Souscription>,
    @InjectRepository(Categorie)
    private categoriesRepository: Repository<Categorie>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,

  ) {}

  public async  index() {
    return this.souscriptionsRepository.find();
  }

  public async create(souscriptionData: souscriptionDto){
    const categorie = await this.categoriesRepository.findOne({where: {id: souscriptionData.categorieId}})
    const client = await this.usersRepository.findOne({where: {id: souscriptionData.clientId}})
    if(categorie && client)
    {
      const oldSouscriptions = await this.souscriptionsRepository.find({
        where: {
          clientId: client.id,
          categorieId: categorie.id
        }
      });

      if(oldSouscriptions)
      {
        
      }
      const newSouscription = await this.souscriptionsRepository.create({
        ...souscriptionData,
      });
      
      await this.souscriptionsRepository.save(newSouscription);
      return newSouscription;
    }
    throw new HttpException(
      'Categorie or client with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async getById(id: number){
    const souscription = await this.souscriptionsRepository.findOneBy({ id });
    if (souscription) {
      return souscription;
    }
    throw new HttpException(
      'Souscription with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async update(id: number, souscriptionData: souscriptionDto){
    const categorie = await this.categoriesRepository.find({where: {id: souscriptionData.categorieId}})

    if(categorie)
      return this.souscriptionsRepository.update(id, {...souscriptionData});
    
    throw new HttpException(
      'Categorie with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async delete(id: number){
    return this.souscriptionsRepository.delete(id);
  }
}