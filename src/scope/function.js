// Lasvariables declaradas con let y const no pueden ser redeclaradas dentro del ambito en el que fueron creadas
// Debe tratarse de evitar el uso de var, para garantizar el funcionamiento del codigo y el que no haya reescritura de absolutamente nada

const anotherFunction = () => {
  var x = 1
  var x = 2
  let y = 3
  // let y =4 Output: Error -> Identifier 'y' has already been declared
  console.log(x)
  console.log(y)
}

anotherFunction()
