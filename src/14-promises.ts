import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('true');
      }, time);
    });
    return promise;
  }

  // https://api.escuelajs.co/docs/
  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products?limit=2&offset=0');
    return promise;
  }

  async function getProductsAsync() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products?limit=2&offset=0');
    return response.data;
  }

  console.log('---'.repeat(10));
  const rsp = await delay(3000);
  console.log(rsp);
  console.log('---'.repeat(10));
  const products = await getProductsAsync();
  console.log(products);
})();
