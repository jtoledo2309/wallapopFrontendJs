import { sparrestApi } from "../SparrestApi.js";

export async function getProducts() {
  const products = await sparrestApi.get(sparrestApi.endpoints.products);

  return products;
}
