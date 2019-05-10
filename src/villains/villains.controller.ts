import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { VillainsService } from './villains.service';

@Controller('villains')
export class VillainsController {
  constructor(private readonly villainsService: VillainsService) {}
  @Get()
  @UseGuards(AuthGuard('bearer'))
  async findAll() {
    return this.villainsService.findAll();
  }
}
