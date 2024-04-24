import { UpdateProductDto } from '../dto/product.dto';
import { Product } from '../model/product.model';
import { ProductHttpService } from './product-http2.service';

export class ProductCRUDService {
  private _url = 'https://api.escuelajs.co/api/v1/products';
  private _http = new ProductHttpService(this._url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    this._http.otherMethod();
    return this._http.update(id, dto);
  }
}
