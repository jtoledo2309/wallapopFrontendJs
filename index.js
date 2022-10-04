import { NotificationController } from "./NotificationController.js";
import { ProductListController } from "./products-list/ProductListController.js";

document.addEventListener("DOMContentLoaded", () => {
  const createControllers = () => {
    const notificationElement = document.querySelector("#notification");
    const productListElement = document.querySelector("#product-list");

    const notificationController = new NotificationController(
      notificationElement
    );
    const productListController = new ProductListController(productListElement);
  };

  const handleUserLogged = () => {
    const token = localStorage.getItem("token");
    const userActions = document.querySelector("#user-actions");
    if (token) {
      userActions.innerHTML =
        '<a href="/createProduct.html">Subir producto</a>';
    } else {
      userActions.innerHTML = '<a href="/signup.html">Inicia sesión</a>';
    }
  };

  createControllers();
  handleUserLogged();
});
