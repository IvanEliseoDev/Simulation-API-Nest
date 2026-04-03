import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CarsInterface } from './interfaces/cars.interface';
import { v4 as uuid} from 'uuid';
import { CreateCarDTO } from './DTO/create-car.dto';
import { UpdateCarDTO } from './DTO/update-car.dto';
import { updateV1State } from 'node_modules/uuid/dist/v1';

@Injectable()
export class CarsService {
    private cars:CarsInterface[] = [
        // {
        //     id: uuid(), //*UUID
        //     brand: "Toyota",
        //     model: "Corolla"
        // },
        // {
        //     id: uuid(),
        //     brand: "Honda",
        //     model: "Civic"
        // },
        // {
        //     id: uuid(),
        //     brand: "Hyundai",
        //     model: "Accent"
        // }
    ]

    public findAll() {
        return this.cars
    }

    public findOneByID(id: string) {
        const carExist = this.cars.find(car => car.id === id) //Filtramos el carro que tenga el mismo ID que el que estamos enviando
        //!Si el Carro no Existe lazamos una extension de Nest NotFoundException
        if (!carExist) throw new NotFoundException(`Car with id '${id} not found'`)
        //*Si Existe Returnamos el Carro Encontrado    
        return carExist
    }

    public create(payload:CreateCarDTO){

        if (payload.brand === null || payload.model === null) throw new BadRequestException(`El modelo, marca no deben de ir vacios`)
        
        const newCar:CarsInterface ={
            id: uuid(),
            brand: payload.brand,
            model: payload.model,

            //* Tambien puedes esparcir todas las propiedades con
            //!...payload
        }

        this.cars.push(newCar)

        return newCar;
    }


    public Update(id: string, payload:UpdateCarDTO) {
        let carExist = this.findOneByID(id)

        if(payload.id && payload.id !== id) throw new BadRequestException(`Car id is not valid inside body`)

        this.cars = this.cars.map(car => {
            if(car.id === id){
                carExist = {
                    ...carExist, //Vuelvo a esparcir todas las propiedades anteriores
                    ...payload, //Sobre escribo las nuevas propiedades sobre las anteriores 
                    id          //Evito que el ID lo modifique
                }
                return carExist
            }
            return car
        })

        return carExist
    }

    public delete(id: string): boolean {
        if (!id) throw new BadRequestException("El id no debe ser menor que 0");
        const carExist = this.findOneByID(id)
        this.cars = this.cars.filter(car => car.id !== id);
        return true;
    }

    fillCarsWithSeedData(cars: CarsInterface[]){
        this.cars = cars
    }
}
