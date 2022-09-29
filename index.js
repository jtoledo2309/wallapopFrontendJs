import { ProductListController } from "./products-list/ProductListController";

document.addEventListener("DOMContentLoaded", () => {
  const productListElement = document.querySelector("#product-list");

  const productListController = new ProductListController(productListElement);
});
