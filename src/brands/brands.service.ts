import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'toyota',
      createdAt: new Date().getTime()
    }
  ]

  create(createBrandDto: CreateBrandDto) {
    if(!createBrandDto) throw new BadRequestException(`Name is not Empty`)
    const newBrand:Brand  = {
     id: uuid(),
     name: createBrandDto.name.toLowerCase(),
     createdAt: new Date().getTime()
    }
    this.brands.push(newBrand);
    return newBrand
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const brandExist = this.brands.find(brand => brand.id === id)
    if(!brandExist) throw new NotFoundException(`Brand with id: ${id} is not Exist`)
    return brandExist;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandExist = this.findOne(id);
    this.brands = this.brands.map( brand => {
      if(brand.id === id){
        brandExist.updateAt = new Date().getTime()
        brandExist = {
          ...brand,
          ...updateBrandDto,
          id
        } 
        return brandExist
      }
      return brand
    })
    return brandExist;
  }

  remove(id: string) {
    const existBrand = this.findOne(id)
    this.brands = this.brands.filter(brand => brand.id !== id)
    return true
  }
}
