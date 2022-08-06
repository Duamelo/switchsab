import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Souscription from './souscription.entity';
import { SouscriptionsService } from './souscriptions.service';
import { SouscriptionController } from './souscription.controller';
import User from '../users/user.entity';
import Categorie from '../categories/categorie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Souscription, User, Categorie])],
  providers: [SouscriptionsService],
  controllers: [SouscriptionController],
})
export class SouscriptionsModule {}
