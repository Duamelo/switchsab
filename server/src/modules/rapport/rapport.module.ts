import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RapportController } from './rapport.controller';
import Rapport from './rapport.entity';
import { RapportService } from './rapport.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rapport])],
  controllers: [RapportController],
  providers: [RapportService],
})
export class RapportModule {}
