import { pubSub } from "../pubSub.js";
import { crearListado, listEmpty, listSpinner } from "./product-list-view.js";
import { getProducts } from "./product-list-provider.js";

export class ProductListController {
  constructor(nodeElement) {
    this.productsContainerElement = nodeElement;

    this.loadProducts();
  }

  async loadProducts() {
    this.productsContainerElement.innerHTML = listSpinner();
    let products = [];

    try {
      products = await getProducts();
    } catch (error) {
      pubSub.publish(
        pubSub.TOPICS.PRODUCT_LOAD_ERROR,
        "Error cargando los productos"
      );
    }

    if (products.length === 0) {
      this.productsDontFound();
    }

    this.productsContainerElement
      .querySelector(".spinner")
      .classList.toggle("hide");

    this.listarProductos(products);
  }

  productsDontFound() {
    const divElement = document.createElement("div");
    divElement.innerHTML = listEmpty();
    this.productsContainerElement.appendChild(divElement);
  }

  listarProductos(productos) {
    for (const producto of productos) {
      const fichaElement = document.createElement("article");
      fichaElement.innerHTML = crearListado(producto);

      this.productsContainerElement.appendChild(fichaElement);
    }
  }
}

//NOTA: falta traerme los productos de alguna manera pero ya deberia verse tanto el spinner como mensajes de eroor como crear la dicha de producto
