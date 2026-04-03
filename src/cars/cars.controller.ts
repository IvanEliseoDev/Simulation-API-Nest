import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
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
    getCarByID( @Param('id') id:string){ //* Con @param obtenemos el parametro que venga en la request
        console.log({id: +id})
        const CarExist = this.carservice.findOneByID(+id)

        if(!CarExist){
            throw new NotFoundException("no se encontro ese ID")
        }

        return{
            id,
            car: CarExist
        }
    }


}
