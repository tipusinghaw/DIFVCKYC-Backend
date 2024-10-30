import { Test, TestingModule } from '@nestjs/testing';
import { CrossmintController } from './crossmint.controller';

describe('CrossmintController', () => {
  let controller: CrossmintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrossmintController],
    }).compile();

    controller = module.get<CrossmintController>(CrossmintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
