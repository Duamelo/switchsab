import { Module } from '@nestjs/common';
import { IotService } from './iot.service';
import { IotController } from './iot.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import FreePost from '../freepost/freepost.entity';
import Poste from '../postes/poste.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FreePost, Poste]), ConfigModule],
  providers: [IotService],
  controllers: [IotController],
})
export class IotModule {}
