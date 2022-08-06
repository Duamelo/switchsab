import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Groupe from './groupe.entity';
import { GroupesService } from './groupes.service';
import { GroupeController } from './groupe.controller';
import Categorie from '../categories/categorie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Groupe, Categorie])],
  providers: [GroupesService],
  controllers: [GroupeController],
})
export class GroupesModule {}
