import { Test, TestingModule } from '@nestjs/testing';
import { AvengersController } from './avengers.controller';

describe('Avengers Controller', () => {
  let controller: AvengersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvengersController],
    }).compile();

    controller = module.get<AvengersController>(AvengersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
