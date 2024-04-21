import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
// omit this properties
export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
}

// partial needn't fill all fields
export interface UpdateProductDto extends Partial<CreateProductDto> {}
