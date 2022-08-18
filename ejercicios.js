/*saludar();*/

// OBJETO CONSTRUCTOR
class listaDeCamisetas{
    constructor(ID, club, precio, talle, imagen, catalogo){
        this.ID= ID;
        this.club = club;
        this.precio = parseInt(precio);
        this. talle = talle;
        this.imagen= imagen;
        this.catalogo= catalogo;
    }
}

//ARRAYS//
const carrito = [];
const camisetas=[
    {
        ID: 1,
        club: "Borussia Dortmund",
        precio: 16000,
        talle: "S-M-L-XL",
        imagen: "./imagenes/borussia.jpg",
        catalogo: "internacionales"
    },
    {
        ID: 2,
        club: "Manchester City",
        precio: 16000,
        talle: "S-M",
        imagen: "./imagenes/manchestercity.png",
        catalogo: "internacionales"
    },
    {
        ID: 3,
        club: "Manchester United",
        precio: 17000,
        talle: "S-M",
        imagen: "./imagenes/manchesterunited.jpg",
        catalogo: "internacionales"
    },
    {
        ID: 4,
        club: "Everton",
        precio: 15000,
        talle: "S-M",
        imagen: "./imagenes/everton.jpg",
        catalogo: "internacionales"
    },
    {
        ID: 5,
        club: "Boca Juniors",
        precio: 12000,
        talle: "S-M",
        imagen: "./imagenes/boca.jpg",
        catalogo: "Locales"
    },
    {
        ID: 6,
        club: "River Plate",
        precio: 12000,
        talle: "S-M",
        imagen: "./imagenes/river.jpg",
        catalogo: "Locales"

    },
    {
        ID: 7,
        club: "Talleres",
        precio: 11000,
        talle: "S-M",
        imagen: "./imagenes/talleres.jpg",
        catalogo: "Locales"

    },
    {
        ID: 8,
        club: "Rosario Central",
        precio: 11000,
        talle: "S-M",
        imagen: "./imagenes/rosario.jpg",
        catalogo: "Locales"
    },
    {
        ID: 9,
        club: "Real Madrid",
        precio: 19000,
        talle: "S-M-L-XL",
        imagen: "./imagenes/realmadrid.jpg",
        catalogo: "Retro"
    },
    {
        ID: 10,
        club: "Barcelona",
        precio: 19000,
        talle: "S-M",
        imagen: "./imagenes/barcelona.jpg",
        catalogo: "Retro"

    },
    {
        ID: 11,
        club: "Celtic",
        precio: 21000,
        talle: "S-M",
        imagen: "./imagenes/celtic.jpg",
        catalogo: "Retro"
    },
    {
        ID: 12,
        club: "Liverpool",
        precio: 22000,
        talle: "S-M",
        imagen: "./imagenes/liverpool.jpeg",
        catalogo: "Retro"
    }
];

function saludar(){
    let nombre=prompt("Bienvenido a MikiShirt, Indicar tu nombre")
    console.log("Bienvenido "+nombre)
}



//CARDS
let cartas=document.getElementById("cartas")

//BUCLE PARA CREAR UNA CARTA PARA CADA OBJETO DEL ARRAY//
for(const camiseta of camisetas){
    //creamos un div para cada una de las cartas//
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



    //BOTON AGREGAR AL CARRITO//

    let miBoton=document.getElementById(`miBoton${camiseta.ID}`);
    miBoton.addEventListener("click", agregarCarrito)
        function agregarCarrito(){
            console.log("Agregaste la camiseta de:" + " " + camiseta.club + " " +"al carrito");
            carrito.push(camiseta);
            console.table(carrito)

            /*Guardar carrito en el localstorage*/
            const guardarCarrito= (clave,valor) => { localStorage.setItem(clave,valor) }
                guardarCarrito("Carrito",JSON.stringify(carrito))
            }
        }
        



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
console.table(mostrarInter);
}

//BOTON RETRO//
let botonRetro = document.getElementById("botonRetro")
botonRetro.addEventListener("click", mostrarRetro)
//FUNCION mostrarRetro//
function mostrarRetro () {
   const mostrarRetro=camisetas.filter((camiseta)=>camiseta.catalogo=="Retro");
   console.table(mostrarRetro);
}
  
  
  
  
   /*  if(mostrarNacional){
    let cartaNac = document.createElement("div")
    //le aplicamos una clase de BS a cada carta//
    cartaNac.className="card col-md-3 m-0";
    //Por cada vuelta que haga el for en cada objeto del array, se va agregar al HTML las siguientes etiquetas//
    cartaNac.innerHTML=`
    <div class="card-body">
    <img src=${mostrarNacional.imagen} class="card-img-top">
      <h5 class="card-title">${mostrarNacional.club}</h5>
      <p class="card-text">$${mostrarNacional.precio}</p>
      <a href="#" id="miBoton${mostrarNacional.ID}" class="btn miBoton btn-primary">COMPRAR</a>
    </div>
    `;
 */


