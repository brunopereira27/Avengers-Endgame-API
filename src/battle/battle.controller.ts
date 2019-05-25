import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { BattleService } from './battle.service';

@Controller('battles')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}
  @Get()
  @UseGuards(AuthGuard('bearer'))
  async findAll() {
    return this.battleService.findAll();
  }
}
