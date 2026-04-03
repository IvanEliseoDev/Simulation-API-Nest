import { IsString, MinLength } from 'class-validator';

export class UpdateBrandDto {
    @IsString({ message: `Name is String` })
    @MinLength(2)
    public readonly name: string
}
