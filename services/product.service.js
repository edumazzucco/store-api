import ProductRepository from "../repositories/product.repository.js";

async function createProduct(product) {
  return await ProductRepository.insertProduct(product);
}

async function getProducts() {
  return await ProductRepository.getProducts();
}

async function getProduct(id) {
  return await ProductRepository.getProduct(id);
}

async function updateProduct(id, product) {
  return await ProductRepository.updateProduct(id, product);
}

async function deleteProduct(id) {
  return await ProductRepository.deleteProduct(id);
}

export default {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
