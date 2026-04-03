import { CarsInterface } from "src/cars/interfaces/cars.interface";
import { v4 as uuuid } from "uuid";

export const CARS_SEED:CarsInterface[] = [
    {
        id: uuuid(),
        brand: 'Toyota',
        model: "Yaris"
    },
    {
        id: uuuid(),
        brand: 'Honda',
        model: "Civic"
    },
    {
        id: uuuid(),
        brand: 'Hyundai',
        model: "Accent"
    }
]