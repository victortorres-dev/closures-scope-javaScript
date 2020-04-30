// un bloque esta definido por {} 

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple'
    // let fruit2 = 'Banana'
    // const fruit3 = 'Kiwi'
  }
  console.log(fruit1) // -> var es local dentro de la funcion, sin embargo let y const estan definidas dentro de un
  // console.log(fruit2) // -> bloque de código especifico, por ello no pueden ser accedidas fuera del mismo
  // console.log(fruit3)
}

fruits()

let x =1 // Se asigna un valor global
{
  let x = 2 // // Se asigna un valor local
  console.log(x) // Imprime el valor local
}

console.log(x) // Imprime el valor global

// debe tenerse cuidado al establecer una variable y de acuerdo en el ambito en que necesite ser declarada
var y =3 // Se asigna un valor global
{
  var y = 4 // Encuentra una redeclaracion en el ámbito local
  console.log(y) // Imprime el valor del ambito local
}

console.log(y) // Imprime el valor del ambito local

const anotherFunctionVar = () => {
  for (var i = 0; i < 10; i++) { // Esta accediendo al ultimo valor que recorre el for, en este ambito i esta asignado sobre el valor 10
    setTimeout(() => {
      console.log(i)
    }, 1000)
    console.log(i)
  }
}

anotherFunctionVar()

const anotherFunctionLet = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i)
    setTimeout(() => {
      console.log(i)
    }, 1000)
    console.log(i)
  }
}

anotherFunctionLet()
