import { Injectable, NotFoundException } from '@nestjs/common';

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
        const carExist = this.cars.find(car => car.id === id) //Filtramos el carro que tenga el mismo ID que el que estamos enviando
        //!Si el Carro no Existe lazamos una extension de Nest NotFoundException
        if(!carExist) throw new NotFoundException(`Car with id '${id} not found'`)
        //*Si Existe Returnamos el Carro Encontrado    
        return carExist
    }
}
