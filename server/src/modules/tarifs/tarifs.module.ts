import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Tarif from './tarif.entity';
import { TarifsService } from './tarifs.service';
import { TarifController } from './tarif.controller';
import Groupe from '../groupes/groupe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarif, Groupe])],
  providers: [TarifsService],
  controllers: [TarifController],
})
export class TarifsModule {}
