import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Groupe from './groupe.entity';
import { GroupesService } from './groupes.service';
import { GroupeController } from './groupe.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Groupe])],
  providers: [GroupesService],
  controllers: [GroupeController],
})
export class GroupesModule {}
