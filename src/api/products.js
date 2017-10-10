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
    const data = [...productsJSON];
    const products = data.splice(offset, posts);
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export function getProductsList(categoryID, posts = 12, offset = 0) {
  return new Promise((resolve) => {
    const data = [...productsJSON];
    const products = data
      .filter(product => (product.category_id === +categoryID))
      .splice(offset, posts);
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export function getProductsDetail(productID) {
  return new Promise((resolve) => {
    const data = [...productsJSON];
    const product = data.filter(el => (el.product_id === +productID))[0];
    setTimeout(() => {
      resolve(product);
    }, 500);
  });
}
