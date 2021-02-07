import { getCarrito } from "./datos.js";
export default class Carrito {
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

  crearProducto(producto) {
    let elemento = document.createElement("li");
    elemento.classList.add("carrito__producto");

    let titulo = document.createElement("h3");
    titulo.classList.add("carrito__producto--titulo");
    titulo.textContent = producto.descripcion.title;

    let cantidad = document.createElement("h3");
    cantidad.classList.add("carrito__producto--cantidad");
    cantidad.textContent = producto.cantidad;

    let precio = document.createElement("h3");
    precio.classList.add("carrito__producto--precio");
    precio.textContent = producto.descripcion.price;

    elemento.append(titulo, cantidad, precio);
    return elemento;
  }

  modelo(props) {
    let css = this.cargarCSS();

    let container = document.createElement("div");
    container.classList.add("carrito__container");

    let h1 = document.createElement("h1");
    h1.textContent = "Carrito";

    let productosCarrito = getCarrito().reduce((acc, el) => {
      let index = acc.findIndex((elemento) => elemento.id == el.id);
      index < 0
        ? acc.push({ id: el.id, cantidad: 1, descripcion: el })
        : (acc[index].cantidad += 1);
      return acc;
    }, []);

    let listadoProductos = document.createElement("ul");

    productosCarrito.map((producto) =>
      listadoProductos.appendChild(this.crearProducto(producto))
    );

    container.append(h1, css, listadoProductos);

    return container;
  }
  main(props) {}
}
