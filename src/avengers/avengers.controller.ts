import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AvengersService } from './avengers.service';

@Controller('avengers')
export class AvengersController {
  constructor(private readonly avengersService: AvengersService) {}
  @Get()
  // @UseGuards(AuthGuard('bearer'))
  async findAll() {
    return this.avengersService.findAll();
  }
}
