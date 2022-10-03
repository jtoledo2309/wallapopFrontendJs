import { sparrestApi } from "../SparrestApi.js";

export const createApiProduct = (product) => {
  sparrestApi.post(sparrestApi.endpoints.products, {
    name: product,
  });
};
