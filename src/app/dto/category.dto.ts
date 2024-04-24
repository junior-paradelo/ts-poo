import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';
import { AccessType, Category } from '../model/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 100)
  name!: string;
  @IsUrl()
  @IsNotEmpty()
  image!: string;
  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'category 1';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    dto.access = AccessType.PRIVATE;
    await validateOrReject(dto);
    console.log(dto);
  } catch (error) {
    console.log(error);
  }
})();
