import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCarDTO{

    @IsString({message: `The Brand is string `})
    @IsNotEmpty({message: `The Brand is not empty`})
    
    public readonly brand:string;

    @IsString({message: `The model is String`})
    @IsNotEmpty({message: `The model is not Empty`})
    @MinLength(3)
    public readonly model:string;
    
}
