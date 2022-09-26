import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Poste from '../postes/poste.entity';
import { FreepostController } from './freepost.controller';
import FreePost from './freepost.entity';
import { FreepostService } from './freepost.service';

@Module({
  imports: [TypeOrmModule.forFeature([Poste, FreePost])],
  controllers: [FreepostController],
  providers: [FreepostService],
})
export class FreepostModule {}
