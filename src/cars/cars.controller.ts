import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    private readonly carservice:CarsService //Injeccion de dependencia del servicio
    constructor(carservice:CarsService){
        this.carservice = carservice
    }

    @Get()
    getAllCars(){
        return this.carservice.findAll()
    }

    
    @Get(":id")
    getCarByID( @Param('id', ParseIntPipe) id:number){ //* Con @param obtenemos el parametro que venga en la request
        console.log({id: id})
        return this.carservice.findOneByID(id)
    }


}
