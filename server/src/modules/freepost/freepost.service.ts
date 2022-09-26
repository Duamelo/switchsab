import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Poste from '../postes/poste.entity';
import FreePostDto from './dto/freepost.dto';
import FreePost from './freepost.entity';

@Injectable()
export class FreepostService {
  constructor(
    @InjectRepository(FreePost)
    private freepostesRepository: Repository<FreePost>,
    @InjectRepository(Poste)
    private postesRepository: Repository<Poste>,
  ) {}

  public async add(poste: FreePostDto) {
    const freepost_exist = await this.freepostesRepository.find({
      where: { id_object: poste.id_object },
    });

    const attribute_post = await this.postesRepository.find({
      where: { object_id: poste.id_object },
    });

    if (!freepost_exist.length && !attribute_post.length) {
      const _freepost = await this.freepostesRepository.create({
        id_object: poste.id_object,
      });

      await this.freepostesRepository.save(_freepost);
      return _freepost;
    }
    return null;
  }

  public async getAllFreePost() {
    return await this.freepostesRepository.find();
  }

  public async remove(poste_id: number) {
    const freepost_exist = await this.freepostesRepository.find({
      where: { id_object: poste_id },
    });

    if (freepost_exist.length)
      return await this.freepostesRepository.delete(freepost_exist[0].id);
  }
}
