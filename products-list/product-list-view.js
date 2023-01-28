export const crearListado = (producto) => {
  const listaView = `
    <p>Imagen: <img width="25%" height="25%" src="${producto.imageProduct}" alt="Imagen del producto"></p>
    <p>Nombre del usuario: ${producto.user.username}</p>
    <p>Producto: ${producto.name}</p>
    <p>Descripcion: ${producto.description}</p>
    <p>Precio: ${producto.price}$</p>
    <p>Estado: ${producto.forSale}</p>
    <a href="/productDetail.html?id=${producto.id}">Ver detalle del producto</a>
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
