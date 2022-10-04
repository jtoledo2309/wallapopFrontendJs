import { createApiProduct } from "./CreateProductProvider.js";

export class CreateProductController {
  constructor(nodeElement) {
    this.createProductElement = nodeElement;

    this.subscribeToEvents();
  }

  subscribeToEvents() {
    this.createProductElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    const inputObligatoryElements = Array.from(
      this.createProductElement.querySelectorAll(".obligatory")
    );

    const createProductButton = this.createProductElement.querySelector(
      "#create-product-button"
    );

    inputObligatoryElements.forEach((inputObligatory) => {
      inputObligatory.addEventListener("input", () => {
        const areInputsFilled = inputObligatoryElements.every(
          (element) => element.value
        );
        if (areInputsFilled) {
          createProductButton.removeAttribute("disabled");
        } else {
          createProductButton.setAttribute("disabled", "");
        }
      });
    });

    createProductButton.addEventListener("click", () => {
      this.createProduct();
    });
  }

  createProduct() {
    const formData = new FormData(this.createProductElement);
    const producto = formData.get("producto");
    const description = formData.get("description");
    const price = formData.get("price");
    const forSale = formData.get("forSale");
    createApiProduct(producto, description, price, forSale);
  }
}
