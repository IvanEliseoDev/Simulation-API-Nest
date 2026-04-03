import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars:string[] = ['Toyota', 'Honda', 'Hyundai']


    @Get()
    getAllCars(){
        return this.cars
    }

    @Get(":id")
    getCarByID( @Param('id') id:string){ //* Con @param obtenemos el parametro que venga en la request
        console.log({id: +id})
        this.cars[+id]

        if(!this.cars[+id]){
            throw new NotFoundException("no se encontro ese ID")
        }

        return{
            id,
            car: this.cars[id]
        }
    }

    
}
