import { createApiProduct } from "./CreateProductProvider.js";

export class CreateProductController {
  constructor(nodeElement) {
    this.createProductElement = nodeElement;

    this.subscribeToEvents();
  }

  subscribeToEvents() {
    const createProductButton = this.createProductElement.querySelector(
      ".create-product-button"
    );

    this.createProductElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    createProductButton.addEventListener("click", () => {
      this.createProduct();
    });
  }

  createProduct() {
    const formData = new FormData(this.createProductElement);
    const product = formData.get("product");
    createApiProduct(product);
  }
}