import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Villain } from './villains.entity';

@Injectable()
export class VillainsService {
  constructor(
    @InjectRepository(Villain)
    private readonly villainRepository: Repository<Villain>,
  ) {}

  findAll(): Promise<Villain[]> {
    return this.villainRepository.find();
  }
}
