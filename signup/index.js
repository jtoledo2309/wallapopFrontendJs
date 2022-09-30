import { NotificationController } from "../NotificationController.js";
import { SignupController } from "./SignupController.js";

document.addEventListener("DOMContentLoaded", () => {
  const notificationElement = document.querySelector(".notification");
  const createUserFormElement = document.querySelector(".signup-user-form");

  const notificationController = new NotificationController(
    notificationElement
  );
  const signupController = new SignupController(createUserFormElement);
});
