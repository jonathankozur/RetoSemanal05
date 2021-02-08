import { categorias } from "./datos.js";

export default class Categorias {
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

  clickCard(event) {
    let card = event.target.closest(".categorias__card");
    let categoria = card.getAttribute("categoria");

    let propsProductos = { categoria: categoria };

    let nuevasProps = {
      proximaPagina: [
        { componente: "header", props: {} },
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

  crearCategoria(categoria) {
    let card = document.createElement("div");
    card.classList.add("categorias__card");
    card.setAttribute("categoria", categoria);

    let imagen = document.createElement("img");
    imagen.classList.add("categorias__card--imagen");
    imagen.src = "./images/category-" + categoria.replace(" ", "-") + ".webp";

    let titulo = document.createElement("h3");
    titulo.classList.add("categorias__card--titulo");
    titulo.textContent = categoria;

    card.append(titulo,imagen);
    card.addEventListener("click", (e) => this.clickCard(e));
    return card;
  }
  modelo(props) {
    let css = this.cargarCSS();

    let container = document.createElement("section");
    container.classList.add("categorias__container");

    categorias.map((categoria) =>
      container.appendChild(this.crearCategoria(categoria))
    );

    container.append(css);
    return container;
  }
  main(props) {}
}
