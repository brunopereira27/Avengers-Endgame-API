import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avenger } from './avenger.entity';

@Injectable()
export class AvengersService {
  constructor(
    @InjectRepository(Avenger)
    private readonly avengerRepository: Repository<Avenger>,
  ) {}

  findAll(): Promise<Avenger[]> {
    return this.avengerRepository.find();
  }
}
