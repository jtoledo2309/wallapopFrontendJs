import { NotificationController } from "../NotificationController.js";
import { LoginController } from "./LoginController.js";

document.addEventListener("DOMContentLoaded", () => {
  const notificationElement = document.querySelector(".notification");
  const loginUserFormElement = document.querySelector(".login-user-form");

  const notificationController = new NotificationController(
    notificationElement
  );
  const loginController = new LoginController(loginUserFormElement);
});
