import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { triggerAsyncId } from 'async_hooks';
import { retry } from 'rxjs';

export interface CarsInterface {
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

    public findAll() {
        return this.cars
    }

    public findOneByID(id: number) {
        const carExist = this.cars.find(car => car.id === id) //Filtramos el carro que tenga el mismo ID que el que estamos enviando
        //!Si el Carro no Existe lazamos una extension de Nest NotFoundException
        if (!carExist) throw new NotFoundException(`Car with id '${id} not found'`)
        //*Si Existe Returnamos el Carro Encontrado    
        return carExist
    }

    public Save(payload: CarsInterface): CarsInterface {

        if (!payload) throw new BadRequestException(`Formato Invalido el ID y Nombre no pueden venir nulos`)

        if (payload.brand === null || payload.id === null || payload.model === null) throw new BadRequestException(`El modelo, id, marca no deben de ir vacios`)

        this.cars.push(payload)

        return payload
    }


    public Update(id: number, payload: CarsInterface) {
        if (!payload || !id) throw new BadRequestException(`El ID o Cuerpo no debe de ir nulo`)
        if (!payload.brand.trim()) throw new BadRequestException("La marca del Carro no debe de ir vacio")
        if (!payload.model.trim()) throw new BadRequestException("El Modelo del carro no debe de ir nulo")
        let carExist = this.cars.find(car => car.id === id) //!Buscamos el Carro por el ID que recibimos

        //!Indicamos que el nuevo valor del objeto arreglo de cars sera el mapeo del arreglo actualizando solo el que coincida
        this.cars = this.cars.map(car => {
            if(car.id === id) {
                //*Actualizamos el carro que encontramos
                carExist = {
                    ...carExist, //*Mantengo los carros ya existentes
                    ...payload,  //!Lo Sobrescribo sobre lo nuevo
                    id          //! Se Asegura que el ID no cambie
                };
                return carExist
            }
            return car
        })

        return carExist
    }

    public delete(id: number): boolean {
        if (id < 0) throw new BadRequestException("El id no debe ser menor que 0");
        const carExist = this.cars.find(car => car.id === id);
        if (!carExist) throw new NotFoundException(`Car with id '${id}' not found`);
        this.cars = this.cars.filter(car => car.id !== id);
        return true;
    }
}
