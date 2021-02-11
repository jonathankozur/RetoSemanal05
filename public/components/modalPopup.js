export default class ModalPopup {
    constructor(props) {
      console.log('props',props);
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
    //   acciones.forEach((accion, indice) => {
    //     cuadro.appendChild(this.crearBoton(accion, indice));
    //   });


        let h1 = document.createElement('h1');
        h1.textContent = 'MODAL';
        cuadro.appendChild(h1);

        fondo.append(cuadro,css);
        fondo.addEventListener("click", (e) => {
        if (e.target.classList.contains("modalPopup__fondo")) 
            this.cerrarModal(fondo);
        });
  
      return fondo;
    }
    main(props) {}
  }