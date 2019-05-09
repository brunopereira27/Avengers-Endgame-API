import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AvengersModule } from './avengers/avengers.module';
import { UsersModule } from './users/users.module';
import { VillainsModule } from './villains/villains.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(), AvengersModule, UsersModule, VillainsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
