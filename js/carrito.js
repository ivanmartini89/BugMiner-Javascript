let verCarrito = document.getElementById("carritoBitcoin")
let cantidadCarrito = document.getElementById("cantidadCarrito")
    

     const pintarCarrito = ()  => {
             contenedorModal.style.display = "flex"
             contenedorModal.innerHTML = "";
             const modalHeader = document.createElement("div")
               modalHeader.className = "modal-Header"
               modalHeader.innerHTML = 
               `<h2>Shop List</h2>`
              const botonCerrar = document.createElement("div")
              botonCerrar.className = "cierre"
              botonCerrar.innerHTML = `<button type="button" class="botonCerrarShop">❌</button>`

              botonCerrar.onclick = ()  => {
                contenedorModal.style.display ="none" }


               contenedorModal.appendChild(botonCerrar)
               contenedorModal.appendChild(modalHeader)


             carrito.forEach ((minero) => {
                const modalMain = document.createElement("div")
                modalMain.className = "modal-Main"
                 modalMain.innerHTML = 
                 `<h2>${minero.id}</h2>
                 <img id="pepe" src=${minero.imagen}></img>
                 <h3>$ ${minero.precio * minero.cantidad} USD</h3>
                 <span class="restar"> - </span>
                 <p class="cantidad"> Qty: ${minero.cantidad}</p>
                 <span class="sumar"> + </span>
                 <span class="eliminarProducto"> ❌ </span>`

                 contenedorModal.appendChild(modalMain)

                 let restar = modalMain.querySelector(".restar")
                    restar.onclick = () => {
                      if(minero.cantidad !== 1){
                      minero.cantidad--;
                      }
                      pintarCarrito();
                      saveLocal ();
                    }

                 let sumar = modalMain.querySelector(".sumar")
                 sumar.onclick = () => {
                  minero.cantidad++;
                  pintarCarrito();
                  saveLocal ();
                }

                let eliminar = modalMain.querySelector(".eliminarProducto")
                    eliminar.onclick = () => {
                      eliminarProductoCarrito (minero.id);
                    }
             })

             let precioTotal = carrito.reduce((acc, el) => acc + el.precio * el.cantidad , 0 )


             let footerModal = document.createElement("div")
             footerModal.className= "modal-Footer"
               footerModal.innerHTML = 
               `<h2>The total price is : $ ${precioTotal} USD</h2>
               <button type="button" id="compraFinalizada" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"> Finish </button>`
               

             contenedorModal.appendChild(footerModal)
             
             const compraRealizada = document.getElementById("compraFinalizada")
               compraRealizada.onclick = () => {
                Swal.fire(
                  'Thx For Buying!',
                  'Your purchase was successful!',
                  'success'
                )
               }

     }

     

     verCarrito.addEventListener("click", pintarCarrito);
     
     const eliminarProductoCarrito  = (id) => {
         const foundId = carrito.find((element) => element.id === id);

         carrito =  carrito.filter ((carritoId) => {
            return carritoId !== foundId;
         })
         saveLocal();
         carritoCounter ();
         pintarCarrito();

     }

     const carritoCounter = ()  => {
      cantidadCarrito.style.display = "block"
      const carritoLength = carrito.length;
      localStorage.setItem("carritoLength", JSON.stringify(carrito.length))
      cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
     }

     carritoCounter ();