import { NotificationController } from "../NotificationController.js";
import { pubSub } from "../pubSub.js";
import { CreateProductController } from "./CreateProductController.js";

document.addEventListener("DOMContentLoaded", () => {
  const checkUserLogged = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      pubSub.publish(
        pubSub.TOPICS.PRODUCT_LOAD_ERROR,
        "No esta autorizado para ver el contenido"
      );
      setTimeout(() => {
        window.location = "./signup.html";
      }, 2000);
    }
  };

  const notificationContainerElement = document.querySelector(
    ".notification-container"
  );

  const notificationController = new NotificationController(
    notificationContainerElement
  );

  const createProductElement = document.querySelector("#create-product-form");
  const createProductController = new CreateProductController(
    createProductElement
  );

  checkUserLogged();
});
