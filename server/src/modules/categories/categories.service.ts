import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Categorie from './categorie.entity';
import { Repository } from 'typeorm';
import categorieDto from './dto/categorie.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categorie)
    private categoriesRepository: Repository<Categorie>,
  ) {}

  public async index() {
    return this.categoriesRepository.find();
  }

  public async create(categorieData: categorieDto) {
    const newCategorie = await this.categoriesRepository.create({
      ...categorieData,
    });

    await this.categoriesRepository.save(newCategorie);
    return newCategorie;
  }

  public async getById(id: number) {
    const categorie = await this.categoriesRepository.findOneBy({ id });
    if (categorie) {
      return categorie;
    }
    throw new HttpException(
      'Categorie with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  public async update(id: number, categorieData: categorieDto) {
    return this.categoriesRepository.update(id, {
      ...categorieData,
    });
  }

  public async delete(id: number) {
    return this.categoriesRepository.delete(id);
  }
}
