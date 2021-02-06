let categorias = JSON.parse(localStorage.getItem("categorias"));
let productos = JSON.parse(localStorage.getItem("productos"));
let productoDestacado = JSON.parse(localStorage.getItem("productoDestacado"));
let carrito = JSON.parse(localStorage.getItem("carrito"));

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
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        productoDestacado = data;
        localStorage.setItem("productoDestacado", JSON.stringify(data));
        resolve("ok");
      })
      .catch((error) => reject(error));
  });
}

function getCarrito() {
  return new Promise(function (resolve, reject) {
    carrito = carrito ? carrito : [];
    resolve(carrito);
  });
}
function addCarrito(producto) {
  return new Promise(function (resolve, reject) {
    carrito = carrito ? carrito : [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    resolve(carrito);
  });
}

export {
  categorias,
  getCategorias,
  productoDestacado,
  getProductoDestacado,
  getCarrito,
  addCarrito,
};
