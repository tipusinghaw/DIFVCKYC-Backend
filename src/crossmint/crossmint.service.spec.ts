import { Test, TestingModule } from '@nestjs/testing';
import { CrossmintService } from './crossmint.service';

describe('CrossmintService', () => {
  let service: CrossmintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrossmintService],
    }).compile();

    service = module.get<CrossmintService>(CrossmintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
