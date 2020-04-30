/* Al no estar dentro de ninguna función o bloque de codigo,
la variable tiene acceso global (puede accederse a su valor
desde cualquier parte del código) */
var helloVar = 'Hello Var' // Únicamente var puede ser reasignada
let helloLet = 'Hello Let'
const helloConst = 'Hello Const'

const anotherFunction = () => {
  console.log(helloVar)
  console.log(helloLet)
  console.log(helloConst)
}

anotherFunction()

// Es una mala practica sobreescribir los valores de una variable (comunmente ocurre al usa var):

var value = 'asignation to value'
var value = 'reasignation to value'

console.log(value)

// Reasignación con let | const ? -> No, no permiten la reasignación de valores previamente establecidos
/*
let value1 = 'asignation to value1'
let value1 = 'reasignation to value1'

const value2 = 'asignation to value2'
const value2 = 'reasignation to value2'

console.log(value1) // Output -> error
console.log(value2) // Output -> error
*/

// Evitar malas practicas como la creación de variables globales:
// Ejemplo: crear una variable sin asignacion o sin las palabras reservadas let, const o var; dentro de una funcion:

const helloBadPractice = () => {
  globalVar = 'I am a global'
  let localVar1 = 'I am a local -> let'
  const localVar2 = 'I am a local -> const'
  var localVar3 = 'I am a local -> var'

  console.log(localVar1) // Sólo de acceso local
  console.log(localVar2) // Sólo de acceso local
  console.log(localVar3) // Sólo de acceso local
}

helloBadPractice()
// El valor gloal se obtiene al ejecutar la función
console.log(globalVar) // De acceso global -> mala práctica
// console.log(localVar1) // Sólo de acceso local, no se puede acceder al valor fuera del bloque donde fue declarada y asignada
// console.log(localVar2) // Sólo de acceso local, no se puede acceder al valor fuera del bloque donde fue declarada y asignada
// console.log(localVar3) // Sólo de acceso local, no se puede acceder al valor fuera del bloque donde fue declarada y asignada

// Incurriendo en otra mala práctica

const anotherBadPractice = () => {
  var localVar = globalVar = 'I am other Global'
}

anotherBadPractice()
console.log(globalVar) // De acceso global -> mala práctica
