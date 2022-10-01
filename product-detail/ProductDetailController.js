import { pubSub } from "../pubSub.js";
import { getProductsById } from "./product-detail-provider.js";
import { buildProductDetail } from "./product-detail-view.js";

export class ProductDetailCoontroller {
  constructor(nodeElement) {
    this.productDetailElement = nodeElement;
  }

  async drawProductDetail(productId) {
    try {
      const product = await getProductsById(productId);
      this.productDetailElement.innerHTML = buildProductDetail(product);
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.PRODUCT_LOAD_ERROR,
        "Error al obtener el producto"
      );
    }
  }
}
