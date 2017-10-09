import categoriesJSON from 'resource/categories.json';
import productsJSON from 'resource/products.json';

export function getProductsRecent() {
  return new Promise (function (resolve, reject) {
    setTimeout(() => {
      resolve(productsJSON.splice(0, 10));
    }, 500);
  });
}
