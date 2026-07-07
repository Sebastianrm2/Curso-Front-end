const miNombre = "Sebastian";

const miEdad = 15;

let aprendiendoFrontend = true;

const tecnologias = ["Javascript","Css","Html","Python"];

const desarrollador = {

    nombre: "Sebastian",

    nivel: "Junior"

};

console.log(miNombre);
console.log(miEdad);
console.log(aprendiendoFrontend);
console.log(tecnologias);
console.log(desarrollador);


En tu script.js, crea estas 3 funciones usando arrow functions:

const saludar = (nombre) => {
    return "Hola " + nombre;
} 

console.log(saludar("Sebastian"));

const sumar = (a, b) => {
    return a + b;
} 
console.log(sumar(10, 5));

const describir = (objeto) => {
    
    return objeto.nombre + " es nivel " + objeto.nivel
}

console.log(describir({ nombre: "Sebastian", nivel: "Junior" }));

const crearTarjeta = (objeto) => {
    return "Proyecto " + objeto.titulo + " | tecnologias: " + objeto.tecnologias 
}

console.log(crearTarjeta({titulo: "Aprendiendo las siguientes Tecnologias", tecnologias:"Javascript"}));