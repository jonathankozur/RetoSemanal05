import { getCarrito } from "./datos.js";
export default class Carrito {
  constructor(props) {
    this.total = 0;
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
    elemento.addEventListener('click',(event)=>this.clickCard(event,producto.descripcion))

    let imagen = document.createElement("img");
    imagen.classList.add("carrito__producto--imagen");
    imagen.src = producto.descripcion.image;
    imagen.alt = producto.descripcion.title;

    let contenedorInfo = document.createElement("div");
    contenedorInfo.classList.add("carrito__producto--contenedorInfo");

    let titulo = document.createElement("h3");
    titulo.classList.add("carrito__producto--titulo");
    titulo.textContent = producto.descripcion.title;

    let contenedorPrecioCantidad = document.createElement("div");
    contenedorPrecioCantidad.classList.add(
      "carrito__producto--contenedorPrecioCantidad"
    );

    let cantidad = document.createElement("h3");
    cantidad.classList.add("carrito__producto--cantidad");
    cantidad.textContent = producto.cantidad + " units.";

    let precioProducto = producto.cantidad * producto.descripcion.price;
    this.total += precioProducto;

    let precio = document.createElement("h3");
    precio.classList.add("carrito__producto--precio");
    precio.textContent = "$ " + precioProducto.toFixed(2);

    contenedorPrecioCantidad.append(cantidad, precio);

    contenedorInfo.append(titulo, contenedorPrecioCantidad);

    elemento.append(imagen, contenedorInfo);
    return elemento;
  }

  clickCard(event,producto){
      this.props.acciones.showModal(producto)
  }

  modelo(props) {
    let css = this.cargarCSS();

    let container = document.createElement("section");
    container.classList.add("carrito__container");

    let productosCarrito = getCarrito().reduce((acc, el) => {
      let index = acc.findIndex((elemento) => elemento.id == el.id);
      index < 0
        ? acc.push({ id: el.id, cantidad: 1, descripcion: el })
        : (acc[index].cantidad += 1);
      return acc;
    }, []);

    let listadoProductos = document.createElement("ul");
    listadoProductos.classList.add("carrito__listado");

    productosCarrito.map((producto) =>
      listadoProductos.appendChild(this.crearProducto(producto))
    );

    let total = document.createElement("div");
    total.classList.add("carrito__total");

    let precioTotal = document.createElement("h3");
    precioTotal.classList.add("carrito__total--precio");
    precioTotal.textContent = "Total: $ " + this.total.toFixed(2);

    let comprar = document.createElement("button");
    comprar.classList.add("carrito__total--comprar");
    comprar.textContent = "Buy all!";
    comprar.addEventListener('click',()=>{
      alert('CrotiAlert... Ya te mandamo toda la cosita...')
      localStorage.clear()
      location.reload()
    })

    total.append(precioTotal, comprar);

    container.append(listadoProductos, total, css);

    return container;
  }
  main(props) {}
}
