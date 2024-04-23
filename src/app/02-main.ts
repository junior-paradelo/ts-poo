import { ProductMemoryService } from './service/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'product 1',
  price: 100,
  description: 'description 1',
  categoryId: 1,
  images: [],
});

const products = productService.getAll();
const productId = products[0].id;
productService.update(productId, {
  title: 'product 100',
});

const rsp = productService.findOne(productId);
console.log(rsp);
