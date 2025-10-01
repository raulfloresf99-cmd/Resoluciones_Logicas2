alert("Bienvenido a nuestra calculadora")

//Creamos las variables para la SUMA
let numeroUno = prompt("Ingrese el primer número")
let numeroDos = prompt("Ingrese el segundo número")

//Comvertimos en números los datos
numeroUno = parseInt(numeroUno)
numeroDos = parseInt(numeroDos)

/// Probamos si capturamos los datos
console.log("Los números que se ingresaron son: " + numeroUno + " y " + numeroDos);

//Creamos la calculadora
console.log(numeroUno + numeroDos);
