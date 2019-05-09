import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VillainsService } from './villains.service';
import { VillainsController } from './villains.controller';
import { Villain } from './villains.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([Villain]), PassportModule],
  providers: [VillainsService],
  controllers: [VillainsController],
})
export class VillainsModule {}
