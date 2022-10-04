import { sparrestApi } from "../SparrestApi.js";

export const createApiProduct = (producto, price, forSale) => {
  sparrestApi.post(sparrestApi.endpoints.products, {
    description: producto,
    price: price,
    forSale: forSale,
  });
};
