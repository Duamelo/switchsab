import { Test, TestingModule } from '@nestjs/testing';
import { FreepostService } from './freepost.service';

describe('FreepostService', () => {
  let service: FreepostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreepostService],
    }).compile();

    service = module.get<FreepostService>(FreepostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
