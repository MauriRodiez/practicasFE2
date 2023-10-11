/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
// console.log("Hola Camada 2");
function iniciarJuego() {

    

    // Saludamos al usuario
    alert("Bienvenido al el popular juego de piedra, papel o tijera de Frontend 2")

    // Guardamos en una variable el nombre del jugador
    let nombre;

  let letras;

      // Verificamos el nombre ingresado
   do {
    nombre = prompt("Ingrese su nombre:");

    nombre = nombre.trim().toUpperCase();

    letras = /^[a-zA-Z]+$/;

    if (nombre.length < 3 || !letras.test(nombre)) {
      alert("El nombre es incorrecto")
    }

   } while (nombre.length < 3 || nombre.length == 0 || !letras.test(nombre));


   alert(`Gracias por jugar ${nombre}. ¡Mucha suerte!`);   

    // mostramos los datos por consola
    console.log("------------------------------");
    console.log("El jugador es: ");
    console.log(nombre);
    console.log("------------------------------");

    return nombre

}

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
const nombreJugador = iniciarJuego()

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


