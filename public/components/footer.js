export default class Footer {
  constructor(props) {
    this.modelo = this.modelo(props);
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
  modelo() {
    let css = this.cargarCSS();
    let container = document.createElement("footer");
    container.classList.add("footer__container");

    let derechos = document.createElement('span')
    derechos.classList.add('footer__derechos')
    derechos.textContent = 'Todos los derechos reservados Jonathan Kozur 2021 - SummerHack - Desafio Semana 05 - '
    
    let escuela = document.createElement('a')
    escuela.classList.add('footer__escuela')
    escuela.href = 'https://escueladevrock.com/'
    escuela.target = '_blank'
    escuela.rel = 'noopener'
    escuela.textContent = 'EscuelaDevRock'

    derechos.appendChild(escuela);
    container.append(derechos, css);
    return container;
  }
}