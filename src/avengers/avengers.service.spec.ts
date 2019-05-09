import { Test, TestingModule } from '@nestjs/testing';
import { AvengersService } from './avengers.service';

describe('AvengersService', () => {
  let service: AvengersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvengersService],
    }).compile();

    service = module.get<AvengersService>(AvengersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
