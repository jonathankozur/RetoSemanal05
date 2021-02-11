import { categorias, getCarrito } from "./datos.js";

export default class Header {
  constructor(props) {
    this.props = props;
    this.modelo = this.modelo(props);
    this.main(this.props);
  }
  crearCategoria(categoria) {
    let elemento = document.createElement("button");
    elemento.classList.add("header__categoria");
    if (this.props && this.props.categoriaSeleccionada == categoria)
      elemento.classList.add("header__categoria--seleccionado");

    elemento.setAttribute("categoria", categoria);
    elemento.setAttribute('aria-label', categoria);
    elemento.addEventListener("click", (e) => this.clickCategoria(e));

    let icono = document.createElement("img");
    icono.classList.add("header__categoria--icono", "off__desktop");
    icono.src = "./images/icon-" + categoria.replace(" ", "-") + ".svg";

    let titulo = document.createElement("h6");
    titulo.classList.add("header__categoria--titulo", "off__mobile");
    titulo.textContent = categoria;

    elemento.append(icono, titulo);
    return elemento;
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

  clickCarrito(props) {
    let componentes = [
      { componente: "header", props: {} },
      { componente: "carrito", props: {} },
      { componente: "footer", props: {} },
    ];
    localStorage.setItem("show", JSON.stringify(componentes));
    props.acciones.show(componentes);
  }
  clickLogo(props) {
    let nuevasProps = {
      proximaPagina: [
        { componente: "header", props: {} },
        { componente: "landing", props: {} },
        { componente: "categorias", props: {} },
        { componente: "footer", props: {} },
      ],
      cargar: ["categorias", "productoDestacado"],
    };
    let componentes = [
      {
        componente: "cargando",
        props: nuevasProps,
      },
    ];
    localStorage.setItem("show", JSON.stringify(componentes));
    props.acciones.show(componentes);
  }

  clickCategoria(event) {
    let card = event.target.closest(".header__categoria");
    let categoria = card.getAttribute("categoria");

    let propsProductos = { categoria: categoria };

    let nuevasProps = {
      proximaPagina: [
        { componente: "header", props: { categoriaSeleccionada: categoria } },
        { componente: "productos", props: propsProductos },
        { componente: "footer", props: {} },
      ],
      cargar: ["productosCategoria"],
      cargarProps: { categoria: categoria },
    };

    let componentes = [
      {
        componente: "cargando",
        props: nuevasProps,
      },
    ];
    localStorage.setItem("show", JSON.stringify(componentes));
    this.props.acciones.show(componentes);
  }

  crearLogo(props) {
    let logo = document.createElement("button");
    logo.classList.add("header__logo");
    logo.addEventListener("click", () => this.clickLogo(props));
    logo.setAttribute('aria-label', 'Logo');

    let imagen = document.createElement("img");
    imagen.classList.add("header__logo--imagen");
    imagen.src = "./images/icon-logo.svg";

    logo.appendChild(imagen);

    return logo;
  }

  crearCarrito(props) {
    let elementoCarrito = document.createElement("button");
    elementoCarrito.classList.add("header__carrito");
    elementoCarrito.style.backgroundImage = "url(./images/icon-carrito.svg)";
    elementoCarrito.setAttribute('aria-label', 'Cart');

    elementoCarrito.addEventListener("click", () => this.clickCarrito(props));

    let cantidad = document.createElement("p");
    cantidad.classList.add("header__carrito--cantidad");
    cantidad.textContent = getCarrito().length;

    elementoCarrito.appendChild(cantidad);

    return elementoCarrito;
  }

  modelo(props) {
    let css = this.cargarCSS();

    let container = document.createElement("header");
    container.classList.add("header__container");

    let logo = this.crearLogo(props);

    let contenedorCategorias = document.createElement("div");
    contenedorCategorias.classList.add("header__contenedorCategorias");
    categorias.map((categoria) =>
      contenedorCategorias.appendChild(this.crearCategoria(categoria))
    );

    let elementoCarrito = this.crearCarrito(props);

    container.append(logo, contenedorCategorias, elementoCarrito, css);
    return container;
  }
  main(props) {}
}
