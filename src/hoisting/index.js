// hoisting -> el levantamiento de las declaraciones
// js utiliza el hosting en las declaraciones pero no en las inicializaciones
a = 2 // asignacion de valor antes de la declaración de las variables
var a
console.log(a) // 2

/* El ejemplo anterior muestra como el hosting actua al elevar las declaraciones es decir:

var a
a = 2
console.log(a) // 2

Esto sucede en el momento en que se compila el código, antes de ser interpretado por el navegador,
lo que permite acceder a un valor que previamento no ha sido declarado
*/

// otro ejemplo

console.log(a) // esto no es posible, deido a que en esta linea no se esta generando un alor, sino intentando acceder, sin emargo aun no esta disponile
var a = 2

// otro ejemplo

nameOfDog('skuishi')

function nameOfDog (name) {
  console.log(name)
}
