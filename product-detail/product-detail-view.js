export const buildProductDetail = (product) => {
  return `  <p>${product.user.username}</p>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p>${product.forSale}</p>
            <button style="display: none">Eliminar producto</button>
  `;
};
