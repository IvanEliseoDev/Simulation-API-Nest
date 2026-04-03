import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import e from 'express';

//Agrupan y desacoplan un conjunto de funcionalidad especifica
@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
