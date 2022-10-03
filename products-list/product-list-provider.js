import { sparrestApi } from "../SparrestApi.js";

export async function getProducts() {
  const endpoint = `${sparrestApi.endpoints.products}?_expand=user`;
  const products = await sparrestApi.get(endpoint);

  return products;
}
