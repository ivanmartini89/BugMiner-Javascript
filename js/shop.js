let carrito = JSON.parse(localStorage.getItem("cantidades")) || [];
let contenedorModal = document.getElementById("modalContainer");

let listado = document.getElementById("contenedorShop");

for (const busqueda of productos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<div class="item1">
    <div class="arriba"><h3>${busqueda.nombre}</h3></div>
    <div class="abajo">
      <div class="derecha">
        <img src="${busqueda.imagen}" alt="imagen minero Spider" />
      </div>
      <div class="izquierda">
        <div class="descripcion">
          <img src="../img/descripcion1.svg" alt="icono de mas e igual" />
          <p>Power Consumption ${busqueda.consumo}</p>
        </div>
        <div class="descripcion">
          <img src="../img/descripcion2.svg" alt="iconode Hashrate" />
          <p>${busqueda.hashrate}</p>
        </div>
        <div class="descripcion">
          <img src="../img/descripcion3.svg" alt="icono de rayo" />
          <p>Power supply AC ${busqueda.voltaje}</p>
        </div>
        <div class="descripcion">
          <button type="button" id="${busqueda.id}" class="btn btn-primary btn-lg">${busqueda.precio} USD</button>
        </div>
      </div>
    </div>
  </div>`;

  listado.appendChild(contenedor);

  let carritoCompra = document.getElementById(`${busqueda.id}`);
  carritoCompra.onclick = () => {
    agregarCarrito(`${busqueda.id}`);
  };

  function agregarCarrito(id) {
    const repeat = carrito.some(
      (repeatProduct) => repeatProduct.id === busqueda.nombre
    );

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === busqueda.nombre) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: busqueda.nombre,
        imagen: busqueda.imagen,
        precio: busqueda.precio,
        cantidad: busqueda.cantidad,
      });
    }
    saveLocal();
    carritoCounter();
  }
}
//set item
let saveLocal = () => {
  localStorage.setItem("cantidades", JSON.stringify(carrito))
}

//get item



