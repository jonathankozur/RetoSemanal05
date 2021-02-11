import { productosCategoria } from "./datos.js";

export default class Productos {
  constructor(props) {
    this.modelo = this.modelo(props);
    this.props = props;
    this.main(this.props);
  }
  cargarCSS() {
    let css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute(
      "href",
      "./components/" + this.constructor.name.toLowerCase() + ".css"
    );
    css.setAttribute("media", "screen");
    return css;
  }

  clickComprar(producto) {
    this.props.acciones.agregarCarrito(producto);
  }

  crearProducto(producto) {
    let card = document.createElement("div");
    card.classList.add("productos__card");
    card.setAttribute("data-id", producto.id);

    let imagen = document.createElement("img");
    imagen.classList.add("productos__card--imagen");
    imagen.src = producto.image;
    imagen.alt = producto.title;

    let contenedorDatos = document.createElement("div");
    contenedorDatos.classList.add("productos__card--contenedor");

    let titulo = document.createElement("h3");
    titulo.classList.add("productos__card--tituto");
    titulo.textContent = producto.title;

    let precio = document.createElement("h4");
    precio.classList.add("productos__card--precio");
    precio.textContent = "$ " + producto.price.toFixed(2);

    let comprar = document.createElement("button");
    comprar.classList.add("productos__card--comprar");
    comprar.textContent = "Buy it!";
    comprar.addEventListener("click", () => this.clickComprar(producto));

    contenedorDatos.append(titulo, precio);

    card.append(imagen, contenedorDatos, comprar);

    return card;
  }

  modelo(props) {
    let css = this.cargarCSS();
    let container = document.createElement("section");
    container.classList.add("productos__container");

    productosCategoria.map((producto) =>
      container.appendChild(this.crearProducto(producto))
    );

    container.appendChild(css);
    return container;
  }
  main(props) {}
}
