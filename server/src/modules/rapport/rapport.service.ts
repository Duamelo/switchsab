import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateRapportDto from './dto/rapport.dto';
import Rapport from './rapport.entity';

@Injectable()
export class RapportService {
  constructor(
    @InjectRepository(Rapport)
    private rapportRepository: Repository<Rapport>,
  ) {}

  public async add(rapport: CreateRapportDto) {
    const _rapport = await this.rapportRepository.create(rapport);

    await this.rapportRepository.save(_rapport);
    return _rapport;
  }

  public async findAll() {
    return await this.rapportRepository.find();
  }
}
