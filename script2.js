//CARRITO//
const carrito = [];

let cartas=document.getElementById("cartas");
    
//FUNCION RENDERIZAR
renderizarCamisetas();

function renderizarCamisetas() {
        for(const camiseta of camisetas){
            //Div para cada carta//
            let carta=document.createElement("div")
            //le aplicamos una clase de BS a cada carta//
            carta.className="card col-md-3 m-0";
            //Por cada vuelta que haga el for en cada objeto del array, se va agregar al HTML las siguientes etiquetas//
            carta.innerHTML=`
            <div class="card-body">
            <img src=${camiseta.imagen} class="card-img-top">
              <h5 class="card-title">${camiseta.club}</h5>
              <p class="card-text">$${camiseta.precio}</p>
              <a href="#" id="miBoton${camiseta.ID}" class="btn miBoton btn-primary">COMPRAR</a>
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
    alert("Agregaste la camiseta de:" + " " + camiseta.club + " " +"al carrito");
    document.getElementById("modalCarrito").innerHTML+=`
    <tr>
        <td>${camiseta.club}</td>
        <td><b>${camiseta.precio}</b></td>
    </tr><br>
`;

/*Guardar carrito en el localstorage*/
const guardarCarrito= (clave,valor) => { localStorage.setItem(clave,valor) }
guardarCarrito("Carrito",JSON.stringify(carrito))

}



  //Proyecto a mostrar las CARDS unicamente del filtro elegido//


//BOTONES NAV FILTRO//

//BOTON NACIONALES//
let botonNac = document.getElementById("botonNac")
botonNac.addEventListener("click", mostrarNac)
//FUNCION mostrarNac//
function mostrarNac () {
   const mostrarNacional=camisetas.filter((camiseta)=>camiseta.catalogo=="Locales");
   console.table(mostrarNacional);
}

//BOTON INTERNACIONALES//
let botonInt = document.getElementById("botonInt")
botonInt.addEventListener("click", mostrarInt)
//FUNCION mostrarInt//
function mostrarInt () {
const mostrarInter=camisetas.filter((camiseta)=>camiseta.catalogo=="Internacionales");
console.table(mostrarInter)
}

//BOTON RETRO//
let botonRetro = document.getElementById("botonRetro")
botonRetro.addEventListener("click", mostrarRetro)
//FUNCION mostrarRetro//
function mostrarRetro () {
   const mostrarRetro=camisetas.filter((camiseta)=>camiseta.catalogo=="Retro");
   console.table(mostrarRetro);
}
  
    

