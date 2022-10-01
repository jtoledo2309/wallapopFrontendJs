import { sparrestApi } from "../SparrestApi.js";

export const getProductsById = async (productId) => {
  const product = await sparrestApi.get(
    `${sparrestApi.endpoints.products}/${productId}`
  );

  return product;
};
