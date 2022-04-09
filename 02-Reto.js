let ti = prompt("Elija el tipo de hamburguesa: Sencilla - Doble - Triple")

let n = Number
(prompt("Indique la cantidad de hamburguesas"))

let tp = prompt
("Indique medio de pago: tarjeta de credito o efectivo")

let pa=0;

let ca=0.05;

let to=0;

let tot=0;

switch(ti){

    case "Sencilla":
        pa=20;
        to = n * pa;
        tot = n*pa+ca

    break;

    case "Doble":
        pa=25;
        to = n * pa;
        tot = n*pa+ca
    break;

    case "Triple":
        pa=28;
        to = n * pa;
        tot = n*pa+ca
    break;



}
    console.log(to);
    console.log(tot);   
