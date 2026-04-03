import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './DTO/create-car.dto';
import { UpdateCarDTO } from './DTO/update-car.dto';



@Controller('cars')
//@UsePipes(ValidationPipe)
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
    getCarByID( @Param('id', ParseUUIDPipe) id:string){ //* Con @param obtenemos el parametro que venga en la request
        console.log({id: id})
        return this.carservice.findOneByID(id)
    }

    //*Metodo Post
    @Post()
    createCar(@Body() createCar:CreateCarDTO){
        return this.carservice.create(createCar);
    }

    @Put(":id")
    updateCar(@Param('id', ParseUUIDPipe) id:string, @Body() payload:UpdateCarDTO){
       return this.carservice.Update(id, payload)
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteCar(@Param('id', ParseUUIDPipe) id:string){
        return this.carservice.delete(id)
    }

}
