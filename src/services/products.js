import { ProductCollection } from '../db/models/products.js';

export const getAllProducts = async () => {
  const products = await ProductCollection.find({});
  return products;
};

export const getProductById = async (productId) => {
  const products = await ProductCollection.findById(productId);
  return products;
};

export const createProduct = async (payload) => {
  const product = await ProductCollection.create(payload);
  return product;
};

export const updateProduct = async (productId, payload) => {
  const product = await ProductCollection.findByIdAndUpdate(
    productId,
    payload,
    {
      new: true,
    },
  );
  return product;
};

export const deleteProduct = async (productId) => {
  const product = await ProductCollection.findByIdAndDelete(productId);
  return product;
};
