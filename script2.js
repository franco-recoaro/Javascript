
//CARRITO//
const carrito = [];
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}

//FUNCION SUMA TOTAL CARRITO//
function sumarCarrito(){
    const totalCarrito=carrito.reduce((acumulador,camiseta)=>acumulador+camiseta.precio,0);
    document.getElementById("precioTotal").innerHTML=`
    <h3">$${totalCarrito}</h3>
    `; 
    }
    

//CARDS//
let cartas=document.getElementById("cartas");
    
//FUNCION RENDERIZAR
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
              <a href="#" id="miBoton${camiseta.ID}" class="btn miBoton btn-primary justify-content-center" style="width:5rem">Carro</a>
              <a href="#" id="miBotonFav${camiseta.ID}" class="btn miBotonFav btn-primary " style="width:5rem"><img src="./imagenes/favorito.png" style="width:20px"></a>
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
    Swal.fire(
        camiseta.club,
        "Agregaste al carrito con exito!",
        "success"
      )
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



//agregar boton de finalizar compra --> borrar elementos del carrito total o por separado

