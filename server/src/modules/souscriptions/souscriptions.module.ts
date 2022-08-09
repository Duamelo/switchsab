import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Souscription from './souscription.entity';
import { SouscriptionsService } from './souscriptions.service';
import { SouscriptionController } from './souscription.controller';
import User from '../users/user.entity';
import Tarif from '../tarifs/tarif.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Souscription, User, Tarif])],
  providers: [SouscriptionsService],
  controllers: [SouscriptionController],
})
export class SouscriptionsModule {}
