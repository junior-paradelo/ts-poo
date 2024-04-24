import axios from 'axios';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

export class BaseHttpService<T> {
  constructor(private _url: string) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this._url);
    return data;
  }
}

(async () => {
  const urlp = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(urlp);
  const rspp = await productService.getAll();
  console.log(rspp.length);

  const urlc = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(urlc);
  const rspc = await categoryService.getAll();
  console.log(rspc.length);
})();
