import axios from 'axios';
import { UpdateProductDto, CreateProductDto } from '../dto/product.dto';
import { ProductService } from '../model/product-service.model';
import { Product } from '../model/product.model';

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  async update(id: number, changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto);
    return data;
  }
  async findOne(id: number) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}
