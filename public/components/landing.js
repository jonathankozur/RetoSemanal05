import { productoDestacado } from "./datos.js";

export default class Landing {
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

  recortarTexto(texto, limite, dots) {
    return texto.length > limite ? texto.substring(0, limite) + dots : texto;
  }

  modelo(props) {
    let css = this.cargarCSS();

    let container = document.createElement("section");
    container.classList.add("landing__container");
    container.style.backgroundImage =
      "url(./images/productoDestacado-fondo.webp)";

    let contenedorFondoDatos = document.createElement("div");
    contenedorFondoDatos.classList.add("landing__contenedorFondo--centrar");

    let fondoDatos = document.createElement("div");
    fondoDatos.classList.add("landing__fondo");

    let imagen = document.createElement("img");
    imagen.classList.add("landing__fondo--imagen");
    imagen.src = productoDestacado.image;

    let titulo = document.createElement("h1");
    titulo.classList.add("landing__fondo--titulo");
    titulo.textContent = productoDestacado.title;

    let precio = document.createElement('h2')
    precio.classList.add('landing__fondo--precio')
    precio.textContent = '$ '+productoDestacado.price.toFixed(2)

    let descripcion = document.createElement("p");
    descripcion.classList.add("landing__fondo--descripcion");
    descripcion.textContent = this.recortarTexto(
      productoDestacado.description,
      70,
      "..."
    );

    let comprar = document.createElement("button");
    comprar.classList.add("landing__fondo--comprar");
    comprar.textContent = "buy it!";
    comprar.addEventListener("click", () =>
      this.clickComprar(productoDestacado)
    );

    fondoDatos.append(imagen, titulo, precio, descripcion, comprar);
    contenedorFondoDatos.append(fondoDatos);

    container.append(contenedorFondoDatos, css);
    return container;
  }
  main(props) {}
}
