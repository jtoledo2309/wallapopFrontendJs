import { sparrestApi } from "../SparrestApi.js";

export const createApiProduct = (producto, description, price, forSale) => {
  sparrestApi.post(sparrestApi.endpoints.products, {
    name: producto,
    description: description,
    price: price,
    forSale: forSale,
  });
};
