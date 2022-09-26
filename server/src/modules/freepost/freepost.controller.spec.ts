import { Test, TestingModule } from '@nestjs/testing';
import { FreepostController } from './freepost.controller';

describe('FreepostController', () => {
  let controller: FreepostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreepostController],
    }).compile();

    controller = module.get<FreepostController>(FreepostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
