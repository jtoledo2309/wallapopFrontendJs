import { NotificationController } from "../NotificationController.js";
import { ProductDetailCoontroller } from "./ProductDetailController.js";

document.addEventListener("DOMContentLoaded", () => {
  const productDetailContainerElement = document.querySelector(
    ".product-detail-container"
  );
  const notificationContainerElement = document.querySelector(
    ".notification-container"
  );

  const params = new URLSearchParams(location.search);
  const productId = params.get("id");

  const productDetailController = new ProductDetailCoontroller(
    productDetailContainerElement
  );

  productDetailController.drawProductDetail(productId);

  const notificationController = new NotificationController(
    notificationContainerElement
  );
});
