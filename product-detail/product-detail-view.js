export const buildProductDetail = (product) => {
  return `  
            <p>Imagen: <img src="${product.imageProduct}" alt="Imagen del producto"></p>
            <p>Usuario: ${product.user.username}</p>
            <p>Producto: ${product.name}</p>
            <p>Descripcion: ${product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Estado: ${product.forSale}</p>
            <button style="display: none">Eliminar producto</button>
  `;
};
