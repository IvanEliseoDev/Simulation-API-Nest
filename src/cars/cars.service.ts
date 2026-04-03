import { Injectable } from '@nestjs/common';

interface CarsInterface{
    id: number,
    brand: string,
    model: string
}

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: "Toyota",
            model: "Corolla"
        },
        {
            id: 2,
            brand: "Honda",
            model: "Civic"
        },
        {
            id: 3,
            brand: "Hyundai",
            model: "Accent"
        }
    ]

    public findAll(){
        return this.cars
    }

    public findOneByID(id:number){
        return this.cars.find(car => car.id === id)
    }
}
