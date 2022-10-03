import { sparrestApi } from "../SparrestApi.js";

export const getProductsById = async (productId) => {
  const product = await sparrestApi.get(
    `${sparrestApi.endpoints.products}/${productId}?_expand=user`
  );

  return product;
};

export const removeProductsById = async (productId) => {
  const product = await sparrestApi.delete(
    `${sparrestApi.endpoints.products}/${productId}`
  );
};
