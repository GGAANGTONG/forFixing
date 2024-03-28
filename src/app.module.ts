import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configModuleValidationSchema } from 'configs/env_validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from 'configs/typeOrmModuleOption';
import { UsersModule } from './user/users.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: configModuleValidationSchema
  }),
  TypeOrmModule.forRootAsync(typeOrmModuleOptions),
  UsersModule
],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
