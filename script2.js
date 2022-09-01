
//CARRITO OPTIMIZADO//
carrito=[]
carrito = JSON.parse(localStorage.getItem('carrito')) || []


//FUNCION SUMA TOTAL CARRITO//
function sumarCarrito(){
    const totalCarrito=carrito.reduce((acumulador,camiseta)=>acumulador+camiseta.precio,0);
    document.getElementById("precioTotal").innerHTML=`
    <h3">$${totalCarrito}</h3>
    `; 
    }


//CARDS//
let cartas=document.getElementById("cartas");
    
//FUNCION RENDERIZAR = DIBUJAR CARTAS
renderizarCamisetas();

function renderizarCamisetas() {
        for(const camiseta of camisetas){
            //Div para cada carta//
            let carta=document.createElement("div")
            //le aplicamos una clase de BS a cada carta//
            carta.className="card col-md-3 m-1 p-1 d-flex justify-content-center align-items-center";
            carta.style.width="14rem"
            //Por cada vuelta que haga el for en cada objeto del array, se va agregar al HTML las siguientes etiquetas//
            carta.innerHTML=`
            <div class="card-body m-1 p-0 justify-content-center align-items-center">
            <img src=${camiseta.imagen} class="card-img-top ">
              <h5 class="card-title text-center p-0">${camiseta.club}</h5>
              <p class="card-text text-center">$${camiseta.precio}</p>
              <a href="#" id="miBoton${camiseta.ID}" class="btn miBoton btn-primary justify-content-center align-items-center bg-dark" style="width:5rem">Carro</a>
              <a href="#" id="miBotonFav${camiseta.ID}" class="btn miBotonFav btn-primary bg-warning" style="width:5rem"><img src="./imagenes/favorito.png" style="width:20px"></a>
            </div>
            `;
            //Agregamos el nodo hijo de cada carta al hijo padre que es cartas//
            cartas.append(carta);
           } 

    //BOTON COMPRAR
    camisetas.forEach(camiseta =>{
        //Evento para cada boton COMPRAR.
        document.getElementById(`miBoton${camiseta.ID}`).addEventListener("click",function(){
            agregarAlCarrito(camiseta);
        });
    })
}

//FUNCION AGREGAR AL CARRITO + GUARDAR CARRITO EN LS
function agregarAlCarrito(camiseta){
    carrito.push(camiseta);
    console.table(carrito);
    ///alert("Agregaste la camiseta de:" + " " + camiseta.club + " " +"al carrito");
    Toastify({
        text: "Agregaste con exito al carrito:"+" "+camiseta.club,
        duration: 3500,
        gravity: 'top',
        position: 'right',
        style:{
            background: 'linear-gradient(to right, #0e8302, #048c18,#0bb8b3)'
        }
        }).showToast();
    document.getElementById("modalCarrito").innerHTML+=`
    <tr>
        <td>${camiseta.club}</td>
        <td><b>${camiseta.precio}</b></td>
    </tr><br>
`;

/*Guardar carrito en el localstorage*/
const guardarCarrito= (clave,valor) => { localStorage.setItem(clave,valor) }
guardarCarrito("Carrito",JSON.stringify(carrito))

sumarCarrito();
}


//BOTON FINALIZAR COMPRA (Borrado carrito y LS)
let finalizar=document.getElementById("finalizar")
finalizar.onclick=()=>{
    let timerInterval
    Swal.fire({
      title: 'Estamos procesando tu compra!',
      html: 'Estamos embalando todos los productos! <b></b>.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })  

    //Borrar carrito y LS//

    localStorage.clear();
    if(carrito.length>=0){
    carrito.splice(0,100000000);
    console.log(carrito);
    modalCarrito.remove()
    precioTotal.remove()
    let modalPrincipal=document.getElementById("modalPrincipal").innerHTML=`
    <div id="modalCarrito" class="modal-body"></div>
    <div id="precioTotal" class="d-flex justify-content-end justify-items-end m-2 fs-4"></div>`;
    }else{
        console.log("No hay elementos en tu carrito!")
    }
}



//BORRAR ELEMENTOS DEL CARRITO POR SEPARADO
