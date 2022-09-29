export const buildNotificationView = (message) => {
  return `
      <p>${message}</p>
      <button class="notification-button-close">Cerrar</button>
    `;
};
