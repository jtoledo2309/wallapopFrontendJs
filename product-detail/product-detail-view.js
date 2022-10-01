export const buildProductDetail = (product) => {
  return `  <p>${product.name}</p>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p>${product.forSale}</p>
  `;
};
