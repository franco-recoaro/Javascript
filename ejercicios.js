
let docenas=parseInt(prompt("Cuantas docenas o unidades vas a pedir? Especifica"))
let gustos=prompt("Elegi los sabores de empanadas, al completar el pedido -P para salir")
let=pedido

while(gustos!="P"){
    pedido=pedido+ " " +gustos
    gustos=prompt("Elegi los sabores de empanadas, al completar el pedido -P para salir")
}
alert("Tu pedido es: "+docenas +" "+"empanadas,"+" "+"gustos: "+pedido)

