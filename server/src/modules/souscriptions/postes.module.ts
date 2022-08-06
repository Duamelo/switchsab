import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Poste from './souscription.entity';
import { PostesService } from './souscriptions.service';
import { PosteController } from './poste.controller';
import Groupe from '../groupes/groupe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poste, Groupe])],
  providers: [PostesService],
  controllers: [PosteController],
})
export class PostesModule {}
