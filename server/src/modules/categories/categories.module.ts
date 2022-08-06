import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Categorie from './categorie.entity';
import { CategoriesService } from './categories.service';
import { CategorieController } from './categorie.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Categorie])],
  providers: [CategoriesService],
  controllers: [CategorieController],
})
export class CategoriesModule {}
