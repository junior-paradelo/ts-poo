import axios from 'axios';
import { Product } from './model/product.model';

(async () => {
  // https://api.escuelajs.co/docs/
  async function getProducts(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products?limit=10&offset=0'
    );
    // same example
    // const data = response.data as Product[] but we're using axios
    return data;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}`));
})();
