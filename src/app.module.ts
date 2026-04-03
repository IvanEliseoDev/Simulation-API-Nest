import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import e from 'express';

//Agrupan y desacoplan un conjunto de funcionalidad especifica
@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
