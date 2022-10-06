import { sparrestApi } from "../SparrestApi.js";

export async function createApiProduct(
  producto,
  description,
  price,
  forSale,
  imageProduct
) {
  await sparrestApi.post(sparrestApi.endpoints.products, {
    name: producto,
    description: description,
    price: price,
    forSale: forSale,
    imageProduct: imageProduct,
  });
}
