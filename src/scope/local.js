// En el scope local una variable solo puede ser accedida desde el bloque de código o función a la que pertenece
const helloLocal = () => {
  const hello = 'Hello local variable, (into function)'
  console.log(hello)
}

helloLocal()
// console.log(hello) // La variable no esta definida en un ambito global, por lo tanto no puedeser accedida

// Ámbito Léxico

var scope = 'I am global' // --------------

const functionScope = () => {
  var scope = 'I am just a local' // ------ asignacion de variable sobre la cual TRABAJA la funcion
  const func = () => {
    return scope // ----------------------- NO TRABAJA sobre la variable global; al momento de contruei la funcion, toma el valor local,
    //                                      no de la variable del mismo nombre declarada de forma global (no reasignandóla); a esto se
    //                                      le conoce como ámbito léxico
  }
  console.log(func())
}

console.log(scope)
functionScope()
