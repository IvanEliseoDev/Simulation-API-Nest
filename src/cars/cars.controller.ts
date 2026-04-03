import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { retry } from 'rxjs';


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

    @Post()
    createCar(@Body() req){
        return this.carservice.Save(req)
    }

    @Put(":id")
    updateCar(@Param('id') id:number, @Body() payload){
        
    }

    @Put(":id")
    deleteCar(@Param('id') id:number){
        
    }

}
