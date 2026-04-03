import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsString({message: `Name is String`})
    @MinLength(2)
    public readonly name: string
}
