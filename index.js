import { ProductListController } from "./products-list/ProductListController.js";

document.addEventListener("DOMContentLoaded", () => {
  const productListElement = document.querySelector("#product-list");

  const productListController = new ProductListController(productListElement);
});
