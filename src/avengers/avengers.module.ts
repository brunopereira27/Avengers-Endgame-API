import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvengersService } from './avengers.service';
import { AvengersController } from './avengers.controller';
import { Avenger } from './avenger.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([Avenger]), PassportModule],
  providers: [AvengersService],
  controllers: [AvengersController],
})
export class AvengersModule {}
