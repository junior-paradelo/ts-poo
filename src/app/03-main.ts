import { ProductHttpService } from './service/product-http.service';

(async () => {
  try {
    const productService = new ProductHttpService();

    console.log('---'.repeat(10));
    const products = await productService.getAll();
    console.log(products.length);

    console.log('---'.repeat(10));
    const productWithId2 = await productService.findOne(products[0].id);
    console.log(productWithId2);
  } catch (error) {
    console.log(error);
  }
})();
