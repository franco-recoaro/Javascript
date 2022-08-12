/*saludar();*/

// OBJETO CONSTRUCTOR
class listaDeCamisetas{
    constructor(club, precio, talle){
        this.club = club;
        this.precio = parseInt(precio);
        this. talle = talle;
        this.imagen= imagen;
    }
}

//ARRAYS//
const carrito = [];
const camisetas=[
    {
        club: "Borussia Dortmund",
        precio: 16000,
        talle: "S-M-L-XL",
        imagen: "./imagenes/borussia.jpg"
    },
    {
        club: "Manchester City",
        precio: 16000,
        talle: "S-M",
        imagen: "./imagenes/manchestercity.png"

    },
    {
        club: "Manchester United",
        precio: 17000,
        talle: "S-M",
        imagen: "./imagenes/manchesterunited.jpg"
    },
    {
        club: "Everton",
        precio: 15000,
        talle: "S-M",
        imagen: "./imagenes/everton.jpg"
    },
    {
        club: "Boca Juniors",
        precio: 12000,
        talle: "S-M",
        imagen: "./imagenes/boca.jpg"
    },
    {
        club: "River Plate",
        precio: 12000,
        talle: "S-M",
        imagen: "./imagenes/river.jpg"

    },
    {
        club: "Talleres",
        precio: 11000,
        talle: "S-M",
        imagen: "./imagenes/talleres.jpg"

    },
    {
        club: "Rosario Central",
        precio: 11000,
        talle: "S-M",
        imagen: "./imagenes/rosario.jpg"
    },
    {
        club: "Real Madrid",
        precio: 19000,
        talle: "S-M-L-XL",
        imagen: "./imagenes/realmadrid.jpg"
    },
    {
        club: "Barcelona",
        precio: 19000,
        talle: "S-M",
        imagen: "./imagenes/barcelona.jpg"

    },
    {
        club: "Celtic",
        precio: 21000,
        talle: "S-M",
        imagen: "./imagenes/celtic.jpg"
    },
    {
        club: "Liverpool",
        precio: 22000,
        talle: "S-M",
        imagen: "./imagenes/liverpool.jpeg"
    }
];
/*
//FUNCIONES//
function mostrarCamisetas(camisetas){
    console.table(camisetas)
}

function realizarCompra(){
    let comprar=prompt("Desea realizar la compra");
            if(comprar =="si"){
                console.log("Has realizado la compra con exito");
            }else{      
                console.log("No hay problema, te devolveremos al menu principal para que elijas tu mejor opcion")
            }
}
*/
function saludar(){
    let nombre=prompt("Bienvenido a MikiShirt, Indicar tu nombre")
    console.log("Bienvenido "+nombre)
}


/*
let camisetas=prompt("Que camiseta queres comprar?\nFutbol internacional\nFutbol nacional\nSelecciones\nVersiones Retro\n(Escribir SALIR para volver al menu)")
let precio=0
let consultaTalle=0
let consultaCamiseta=0


//CONDICION//

while(camisetas!="SALIR"){
    switch(camisetas){
        case "Futbol Nacional":
        case "Futbol nacional":
        case "futbol nacional":
            camisetaNacional= new listaDeStock("Futbol nacional","TALLES S,M,L,XL", false);
            console.log ("El precio de las camisetas nacionales es desde $8.000");
            precio=precio+8000;
            mostrarCamisetas(camisetasNac);
            let consultaCamiseta=prompt("Que camiseta desea comprar?");
            if(consultaCamiseta == "Boca Juniors" || (consultaCamiseta == "River Plate") || (consultaCamiseta == "Talleres")){
                console.log("Esta camiseta se encuentra en stock")
                camisetasNac.forEach((camisetas)=>console.log("La camiseta seleccionada se encuentra en estos talles "+camisetas.talle))
            }else{
                console.log("Esta camiseta no se encuentra en stock")}
                realizarCompra();
                carrito.push(consultaCamiseta);
                break;
                

        default:
            console.log("Ese producto no está en stock");
            break;
    }

    camisetas=prompt("Que camiseta queres comprar?\nFutbol internacional\nFutbol Nacional\nSelecciones\nVersiones Retro\n(Escribir SALIR para volver al menu)")
}

//FILTRO ESTAMAPADO//
const filtro = carrito.includes ((cam) => cam.estampado==true)
console.log ("Los siguientes productos son aptos para estampar")
console.log(filtro)


//TOTAL A PAGAR//
console.log("Total a pagar: $ "+precio+"\nHas comprado la camiseta: "+carrito)
*/

//CARDS
let cartas=document.getElementById("cartas")
for(const camiseta of camisetas){
    let carta=document.createElement("div")
    carta.className="card col-md-3 m-0";
    carta.innerHTML=`
    <div class="card-body">
    <img src=${camiseta.imagen} class="card-img-top" alt="...">
      <h5 class="card-title">${camiseta.club}</h5>
      <p class="card-text">$${camiseta.precio}</p>
      <a href="#" id="miBoton" class="btn miBoton btn-primary">COMPRAR</a>
    </div>
    `;
    cartas.append(carta)
    
}

let miBoton=document.getElementById(`miBoton--${camisetas.club}`)
miBoton.addEventListener("click",agregarCarrito);
   function agregarCarrito(){
    alert("Agregaste al carrito: "+camisetas.club+"\nFelicitaciones")
    carrito.push(camisetas.club);
    console.table(carrito);
   }
