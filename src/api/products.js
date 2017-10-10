import categoriesJSON from 'resource/categories.json';
import productsJSON from 'resource/products.json';

export function getCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoriesJSON);
    }, 500);
  });
}

export function getProductsRecent(posts = 12, offset = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsJSON.splice(offset, posts));
    }, 500);
  });
}

export function getProductsList(categoriesId, posts = 12, offset = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsJSON
        .filter(product => (product.category_id === categoriesId))
        .splice(offset, posts));
    }, 500);
  });
}

export function getProductsDetail(productId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsJSON.filter(product => product.product_id === productId));
    }, 500);
  });
}
