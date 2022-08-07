import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Groupe from './groupe.entity';
import { Repository } from 'typeorm';
import groupeDto from './dto/groupeDto.dto';
import Categorie from '../categories/categorie.entity';
import groupeCreateDto from './dto/groupeCreateDto.dto';

@Injectable()
export class GroupesService {
  constructor(
    @InjectRepository(Groupe)
    private groupesRepository: Repository<Groupe>,
    @InjectRepository(Categorie)
    private categoriesRepository: Repository<Categorie>,
  ) {}

  public async index() {
    return this.groupesRepository.find();
  }

  public async create(groupeData: groupeCreateDto){
    const categorie = await this.categoriesRepository.findOne({where: {id: groupeData.categorieId}})
    if(categorie)
    {
      const groupe : groupeDto = groupeData;

      const newGroupe = await this.groupesRepository.create({
        ...groupe,
        categorie: {
          id : categorie.id     
        }
      });

      await this.groupesRepository.save(newGroupe);
      return newGroupe;
    }
    throw new HttpException(
      'Categorie with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async getById(id: number) {
    const groupe = await this.groupesRepository.findOneBy({ id });
    if (groupe) {
      return groupe;
    }
    throw new HttpException(
      'Groupe with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async update(id: number, groupeData: groupeDto){
    
    return this.groupesRepository.update(
      id, 
      {
        ...groupeData,
      }
    );
  }

  public async delete(id: number) {
    return this.groupesRepository.delete(id);
  }
}
