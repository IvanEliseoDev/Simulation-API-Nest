import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {

  //Inyectamos los servicios de Cars y Brands
  private readonly carsService: CarsService;
  private readonly brandsService: BrandsService

  constructor(carsService: CarsService, brandsService:BrandsService){
    this.carsService = carsService;
    this.brandsService = brandsService;
  }

  populateDB(){

    this.carsService.fillCarsWithSeedData(CARS_SEED)
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED)
    return 'SEED executed succesfuly'
  }
}
