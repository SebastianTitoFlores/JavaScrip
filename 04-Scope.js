// Scope Global
var nombre = "MrZatan"

function saludo(){
    console.log(`dentro la funcion ${nombre}`);
    var apellido = "jong"
    return 0;

}
console.log(saludo());
console.log(`fuera de la funcion ${nombre}`);

//Scope Local
var nombre1 = "Miguel"

function saludo() {
    var apellido = "Chavez"
    console.log(`dentro la funcion ${apellido}`);
    return 0;
    
}
console.log(saludo());
console.log(`fuera de la funcion ${apellido}`);