
//BOTONES NAV FILTRO//

//BOTON CATALOGO COMPLETO//
let botonCatalogo=document.getElementById("botonCatalogo");
botonCatalogo.addEventListener("click", renderizarCamisetas);



//BOTON NACIONALES//
let botonNac = document.getElementById("botonNac")
botonNac.addEventListener("click",mostrarNac)

//FUNCION mostrarNac//
function mostrarNac () {
   const mostrarNacional=camisetas.filter((camiseta)=>camiseta.catalogo=="Locales");
   for (const nacional of mostrarNacional){
    let imprimirNacional=document.createElement("div")
    imprimirNacional.className="card col-md-3 m-1 p-1 d-flex justify-content-center align-items-center";
            imprimirNacional.style.width="14rem"
            //Por cada vuelta que haga el for en cada objeto del array, se va agregar al HTML las siguientes etiquetas//
            imprimirNacional.innerHTML=`
            <div class="card-body m-1 p-0 justify-content-center align-items-center">
            <img src=${nacional.imagen} class="card-img-top ">
              <h5 class="card-title text-center p-0">${nacional.club}</h5>
              <p class="card-text text-center">$${nacional.precio}</p>
              <a href="#" id="miBoton${nacional.ID}" class="btn miBoton btn-primary justify-content-center" style="width:5rem">Carro</a>
              <a href="#" id="miBotonFav${nacional.ID}" class="btn miBotonFav btn-primary " style="width:5rem"><img src="./imagenes/favorito.png" style="width:20px"></a>
            </div>
            `;
            filtros.append(imprimirNacional);
   }
            
            //BOTON COMPRAR
    mostrarNacional.forEach(camiseta =>{
        //Evento para cada boton COMPRAR.
        document.getElementById(`miBoton${camiseta.ID}`).addEventListener("click",function(){
            agregarAlCarrito(camiseta);
        });
    })};





//BOTON INTERNACIONALES//
let botonInt = document.getElementById("botonInt")
botonInt.addEventListener("click", mostrarInt)

//FUNCION mostrarInt//
function mostrarInt () {
const mostrarInter=camisetas.filter((camiseta)=>camiseta.catalogo=="Internacionales");
for (const internacional of mostrarInter){
    let imprimirInternacional=document.createElement("div")
    imprimirInternacional.className="card col-md-3 m-1 p-1 d-flex justify-content-center align-items-center";
            imprimirInternacional.style.width="14rem"
            //Por cada vuelta que haga el for en cada objeto del array, se va agregar al HTML las siguientes etiquetas//
            imprimirInternacional.innerHTML=`
            <div class="card-body m-1 p-0 justify-content-center align-items-center">
            <img src=${internacional.imagen} class="card-img-top ">
              <h5 class="card-title text-center p-0">${internacional.club}</h5>
              <p class="card-text text-center">$${internacional.precio}</p>
              <a href="#" id="miBoton${internacional.ID}" class="btn miBoton btn-primary justify-content-center" style="width:5rem">Carro</a>
              <a href="#" id="miBotonFav${internacional.ID}" class="btn miBotonFav btn-primary " style="width:5rem"><img src="./imagenes/favorito.png" style="width:20px"></a>
            </div>
            `;
        filtros.append(imprimirInternacional)
   ;}

   //BOTON COMPRAR
   mostrarInter.forEach(camiseta =>{
    //Evento para cada boton COMPRAR.
    document.getElementById(`miBoton${camiseta.ID}`).addEventListener("click",function(){
        agregarAlCarrito(camiseta);
    });
})};




//BOTON RETRO//
let botonRetro = document.getElementById("botonRetro")
botonRetro.addEventListener("click", mostrarRetro)

//FUNCION mostrarRetro//
function mostrarRetro () {
   const mostrarRetro=camisetas.filter((camiseta)=>camiseta.catalogo=="Retro");
   for (const retro of mostrarRetro){
    let imprimirRetro=document.createElement("div")
    imprimirRetro.className="card col-md-3 m-1 p-1 d-flex justify-content-center align-items-center";
            imprimirRetro.style.width="14rem"
            //Por cada vuelta que haga el for en cada objeto del array, se va agregar al HTML las siguientes etiquetas//
            imprimirRetro.innerHTML=`
            <div class="card-body m-1 p-0 justify-content-center align-items-center">
            <img src=${retro.imagen} class="card-img-top ">
              <h5 class="card-title text-center p-0">${retro.club}</h5>
              <p class="card-text text-center">$${retro.precio}</p>
              <a href="#" id="miBoton${retro.ID}" class="btn miBoton btn-primary justify-content-center" style="width:5rem">Carro</a>
              <a href="#" id="miBotonFav${retro.ID}" class="btn miBotonFav btn-primary " style="width:5rem"><img src="./imagenes/favorito.png" style="width:20px"></a>
            </div>
            `;
           filtros.append(imprimirRetro);
   ;}
//BOTON COMPRAR
mostrarRetro.forEach(camiseta =>{
    //Evento para cada boton COMPRAR.
    document.getElementById(`miBoton${camiseta.ID}`).addEventListener("click",function(){
        agregarAlCarrito(camiseta);
    });
})};
  
    

