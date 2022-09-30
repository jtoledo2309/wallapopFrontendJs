import { buildNotificationView } from "./notification-view.js";
import { pubSub } from "./pubSub.js";

export class NotificationController {
  constructor(nodeElement) {
    this.notificationElement = nodeElement;

    this.subscribeEvents();
  }

  subscribeEvents() {
    pubSub.subscribe(pubSub.TOPICS.PRODUCT_LOAD_ERROR, (message) => {
      this.showNotification(message);
    });
  }

  showNotification(message) {
    this.notificationElement.innerHTML = buildNotificationView(message);

    const closeButtonElement = this.notificationElement.querySelector(
      ".notification-button-close"
    );

    closeButtonElement.addEventListener("click", () => {
      this.notificationElement.innerHTML = "";
    });
  }
}
