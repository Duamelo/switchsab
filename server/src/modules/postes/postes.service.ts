import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import Poste from './poste.entity';
import { Repository } from 'typeorm';
import posteDto from './dto/posteDto.dto';
import Groupe from '../groupes/groupe.entity';


@Injectable()
export class PostesService {
  constructor(
    @InjectRepository(Poste)
    private postesRepository: Repository<Poste>,
    @InjectRepository(Groupe)
    private groupesRepository: Repository<Groupe>,
    
  ) {}

  public async  index() {
    return this.postesRepository.find();
  }

  public async create(posteData: posteDto){
    const groupe = await this.groupesRepository.find({where: {id: posteData.groupeId}})
    if(groupe)
    {
      const newPoste = await this.postesRepository.create({
        ...posteData,
      });
      
      await this.postesRepository.save(newPoste);
      return newPoste;
    }
    throw new HttpException(
      'Groupe with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async getById(id: number){
    const poste = await this.postesRepository.findOneBy({ id });
    if (poste) {
      return poste;
    }
    throw new HttpException(
      'Poste with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async update(id: number, posteData: posteDto){
    const groupe = await this.groupesRepository.find({where: {id: posteData.groupeId}})

    if(groupe)
      return this.postesRepository.update(id, {...posteData});
    
    throw new HttpException(
      'Groupe with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async delete(id: number){
    return this.postesRepository.delete(id);
  }
}
