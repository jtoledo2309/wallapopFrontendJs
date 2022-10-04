export const buildProductDetail = (product) => {
  return `  <p>Usuario: ${product.user.username}</p>
            <p>Producto: ${product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Estado: ${product.forSale}</p>
            <button style="display: none">Eliminar producto</button>
  `;
};
