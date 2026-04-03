import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDTO{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string

    @IsString()
    @IsOptional()
    public readonly brand?:string

    @IsString()
    @IsOptional()
    public readonly model?:string
}