import { Module } from '@nestjs/common';
import { IotService } from './iot.service';
import { IotController } from './iot.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Poste from '../postes/poste.entity';
import Groupe from '../groupes/groupe.entity';
import User from '../users/user.entity';
import Souscription from '../souscriptions/souscription.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poste, Groupe, User, Souscription]),
    ConfigModule,
  ],
  providers: [IotService],
  controllers: [IotController],
})
export class IotModule {}
