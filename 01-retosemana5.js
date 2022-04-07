let L= Number(prompt("Introduzca la cantidad en litros de leche que producio hoy:"));

let PG= parseFloat(prompt("Introduzca el precio del galón"));

let G= 3.785 //litros 

let TG= L/G;

let GA= TG*PG;

console.log(`Al final del dia usted gano S/ ${GA} `)

alert (`La ganancia del día es de S/ ${GA.toFixed(3)}`)