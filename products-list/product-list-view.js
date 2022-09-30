export const crearListado = (producto) => {
  const listaView = `
    <p>Nombre del usuario: ${producto.name}</p>
    <p>Producto: ${producto.description}</p>
    <p>Precio: ${producto.price}$</p>
    <p>Estado: ${producto.forSale}</p>
    <a href="http://localhost:8080/productDetail.html?id=${producto.id}">Ver detalle del producto</a>
    <p>-------------------------</p>
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
