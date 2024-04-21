import { faker } from '@faker-js/faker';
import { Product } from '../model/product.model';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

export class ProductMemoryService {
  private products: Product[] = [];
  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.number.int(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], data: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];

    this.products[index] = {
      ...prevData,
      ...data,
    };

    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
}
