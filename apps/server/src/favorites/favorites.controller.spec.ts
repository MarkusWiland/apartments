import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentsController } from './favorites.controller';
import { ApartmentsService } from './favorites.service';

describe('ApartmentsController', () => {
  let controller: ApartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartmentsController],
      providers: [ApartmentsService],
    }).compile();

    controller = module.get<ApartmentsController>(ApartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
