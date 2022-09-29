export const crearListado = (producto) => {
  const listaView = `
    <p>${producto.name}</p>
    <p>${producto.description}</p>
    <p>${producto.price}</p>
    <p>${producto.forSale}</p>
    `;

  return listaView;
};

export const listSpinner = () => {
  return `
    <div class="spinner"><div></div><div></div><div></div></div>
    `;
};

export const listEmpty = () => {
  return `
    Lo sentimos, no hay productos
    `;
};
