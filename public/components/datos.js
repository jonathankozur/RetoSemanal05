let categorias = JSON.parse(localStorage.getItem("categorias"));
let productoDestacado = JSON.parse(localStorage.getItem("productoDestacado"));
let carrito = JSON.parse(localStorage.getItem("carrito"));
let productosCategoria = JSON.parse(localStorage.getItem("productosCategoria"));

function getCategorias() {
  return new Promise(function (resolve, reject) {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        categorias = data;
        localStorage.setItem("categorias", JSON.stringify(data));
        resolve("ok");
      })
      .catch((error) => reject(error));
  });
}

function getProductoDestacado() {
  return new Promise(function (resolve, reject) {
    let numeroAleatorio = Math.floor(Math.random() * 20);
    fetch("https://fakestoreapi.com/products/" + numeroAleatorio)
      .then((response) => response.json())
      .then((data) => {
        productoDestacado = data;
        localStorage.setItem("productoDestacado", JSON.stringify(data));
        resolve("ok");
      })
      .catch((error) => reject(error));
  });
}

function addCarrito(producto) {
  carrito = carrito ? carrito : [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function getCarrito() {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  return carrito ? carrito : [];
}

function getProductosCategoria(categoria) {
  return new Promise(function (resolve, reject) {
    fetch("https://fakestoreapi.com/products/category/" + categoria)
      .then((response) => response.json())
      .then((data) => {
        productosCategoria = data;
        localStorage.setItem("productosCategoria", JSON.stringify(data));
        resolve("ok");
      })
      .catch((error) => reject(error));
  });
}

export {
  categorias,
  getCategorias,
  productoDestacado,
  getProductoDestacado,
  getCarrito,
  addCarrito,
  productosCategoria,
  getProductosCategoria,
};
