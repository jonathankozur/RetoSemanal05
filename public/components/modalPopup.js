export default class ModalPopup {
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
    crearBoton(accion, idBoton) {
      let boton = document.createElement("button");
      boton.classList.add("modalPopup__boton");
      boton.id = "modalPopup__boton" + idBoton;
      boton.textContent = accion.label;
      boton.addEventListener("click", () => accion.accion());
      return boton;
    }

    crearProducto(producto){
      let container = document.createElement('div')
      container.classList.add('modal__producto')

      let imagen = document.createElement('img')
      imagen.classList.add('modal__producto--imagen')
      imagen.src = producto.image
      imagen.alt = producto.title

      let contenedorDatos = document.createElement('div')
      contenedorDatos.classList.add('modal__producto--contenedorDatos')

      let titulo = document.createElement('h3')
      titulo.classList.add('modal__producto--titulo')
      titulo.textContent = producto.title

      let descripcion = document.createElement('p')
      descripcion.classList.add('modal__producto--descripcion')
      descripcion.textContent = producto.description

      let precio = document.createElement('h2')
      precio.classList.add('modal__producto--precio')
      precio.textContent = '$ '+producto.price.toFixed(2)

      contenedorDatos.append(titulo,descripcion,precio)
      container.append(imagen,contenedorDatos)

      return container
    }

    cerrarModal(fondo) {
      fondo.classList.remove("scale-in-tr");
      fondo.classList.add("scale-out-tr");
      setTimeout(() => {
        fondo.remove();
      }, 400);
    }
  
    modelo(props) {
        let css = this.cargarCSS();
        let fondo = document.createElement("div");
        let cuadro = document.createElement("div");
  
        fondo.classList.add("modalPopup__fondo", "scale-in-tr");
        cuadro.classList.add("modalPopup__cuadro");

        let producto = this.crearProducto(props.producto)

        cuadro.appendChild(producto);
        fondo.append(cuadro,css);
        fondo.addEventListener("click", (e) => {
        if (e.target.classList.contains("modalPopup__fondo")) 
            this.cerrarModal(fondo);
        });
  
      return fondo;
    }
    main(props) {}
  }