// Construir 5 funciones que desarrollan los ejercicios vistos en clase

// 1. Si es un numero par o impar
// 2. Si el numero es primo o no es primo
// 3. Una función que dado el numero me indique el siguiente numero primo
// 4. Una función que imprima el cuadrado  de n x n

// Ejercicio #1 (Par o impar)

let nume = prompt("Ingrese un número:"); 
esPar(nume)
function esPar(numero) {
    if (numero % 2 === 0) { 
    console.log(`${nume} es par`);
    } else {
        console.log(`${nume} es impar`);
    }
  }


// Ejercicio #2 (Primo o no primo)
  
//   let nume = prompt("Ingrese un número:");
//   let i = 2; i< numero; i ++ ;
//   primo(nume)
//   function primo(numero){

//     if (numero % i === 0)
//     console.log(`${nume} es primo`);
//     else {
//         console.log(`${nume} no es primo`);
//     }
//   }


// Ejercicio #3 (el siguiente numero primo)


// let n = parseInt(prompt("Ingrese un numero"));
// let solo =0;

// function primo (numero) {
//     for( let i = 2; i< numero; i ++){
//        if (numero % i === 0){
//           return false;
//        }
//     }
//     return numero !== 1;
//  } 
 
// if (primo(n)){
//     console.log( n + " es primo")
//     siguiente_n(n)
// }
// else {
//     console.log(n+ " no es primo")
//     siguiente_n(n)
// }



//  function siguiente_n (numero_dado){
// solo = numero_dado
// solo++
// while (primo(solo) == false){
//     solo++
// }
// console.log (`El siguiente numero primo de ${n} es ` + solo)
//  }



// Ejercicio #4 (cuadrado  de n x n)


// let n = prompt("Ingrese un número para el tamaño del cuadrado:");
// impcuadrado(n)
// function impcuadrado(n) {
//     for (let i = 0; i < n; i++) {
//       let linea = '';
//       for (let j = 0; j < n; j++) {
//         linea += '* ';
//       }
//       console.log(linea);
//     }
//   }