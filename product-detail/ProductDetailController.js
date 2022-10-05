import { pubSub } from "../pubSub.js";
import { decodeToken } from "../utils/decodeToken.js";
import {
  getProductsById,
  removeProductsById,
} from "./product-detail-provider.js";
import { buildProductDetail } from "./product-detail-view.js";

export class ProductDetailCoontroller {
  constructor(nodeElement) {
    this.productDetailElement = nodeElement;
  }

  async drawProductDetail(productId) {
    try {
      const product = await getProductsById(productId);
      this.product = product;
      this.productDetailElement.innerHTML = buildProductDetail(product);
      this.drawRemoveButton();
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.PRODUCT_LOAD_ERROR,
        "Error al obtener el producto"
      );
    }
  }

  drawRemoveButton() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      const tokenData = decodeToken(token);

      if (tokenData.userId === this.product.userId) {
        const removeButton = this.productDetailElement.querySelector("button");
        removeButton.style.display = "block";
        removeButton.addEventListener("click", () => this.removeProduct());
      }
    }
  }

  async removeProduct() {
    const response = window.confirm("Are you sure?");
    if (response) {
      try {
        await removeProductsById(this.product.id);
        alert("El producto se ha eliminado");
        window.location = "/";
      } catch (error) {
        pubSub.publish(
          pubSub.TOPICS.PRODUCT_LOAD_ERROR,
          "Error al eliminar producto"
        );
      }
    }
  }
}
