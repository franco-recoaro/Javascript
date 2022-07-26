saludar();

let divisa=prompt("Que divisa queres comprar? (Escribir SALIR para volver al menu)")
let billetes=0
let precioUSD=billetes*350;
let precioEUR=billetes*380;
let precioReal=billetes*300;

function saludar(){
    let nombre=prompt("Bienvenido a MikiCave, Indicar tu nombre")
    console.log("Buenas noches "+nombre)
}

while(divisa!="SALIR"){
    switch(divisa){
        case "dolar":
        case "DOLAR":
            alert("El DOLAR actualmente esta 350");
            billetes=parseInt(prompt("Cuanto quieres comprar?\nEscribir SALIR para volver al menu"));
            precioUSD=billetes*350
            console.log("Vas abonar $" +precioUSD+ " por " +billetes+ "USD");
            break;

        case "euro":
        case "EURO":
            alert("El EURO actualmente esta 380");
            billetes=parseInt(prompt("Cuanto quieres comprar?\nEscribir SALIR para volver al menu"));
            precioEUR=billetes*380;
            console.log("Vas abonar $" +precioEUR+ " por " +billetes+ "EUROS");
            break;

        case "real":
        case "REAL":
            alert("El REAL actualmente está 300");
            billetes=parseInt(prompt("Cuanto quieres comprar?\nEscribir SALIR para volver al menu"));
            precioReal=billetes*300;
            console.log("Vas abonar $" +precioReal+ " por " +billetes+" REALES");
            break;

        default:
            console.log("Esta divisa no se encuentra disponible (Escribir SALIR para volver al menu)");
            break;
            }
        divisa=prompt("Que otra divisa queres comprar? Escribir SALIR para volver al menu")
    }

    function sumaTotal (){
        let totalGeneral = precioUSD + precioEUR + precioReal;
        alert("Vas abonar $"+totalGeneral +" Pesos")
}
sumaTotal();
