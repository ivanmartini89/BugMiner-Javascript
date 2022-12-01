
const formulario = document.querySelector(`#formulario`);
const boton = document.querySelector(`#boton`);
const resultado = document.querySelector(`#resultado`);


const filtrar = ()  => {
    resultado.innerHTML = ``
    const texto = formulario.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
      resultado.innerHTML += `
      <li><a href="#${producto.posicion}">${producto.nombre} Price : ${producto.precio} USD</a></li>`
 }
}
   if(resultado.innerHTML === '') {
    resultado.innerHTML += `
    <li>Producto no encontrado rey</li>`
   }


}

boton.addEventListener(`click`, filtrar)



