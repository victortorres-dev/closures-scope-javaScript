// JS, por su naturaleza, no fomenta el uso de datos privados,
// pero por medio de los closures se pueden crear valores privados que
// solo pueden ser accedidos por medio de metodos y que no van a estar
// disponibles fuera de la función donde fueron creados

// Manejando datos privados dentro de funciones 
const person = () => {
  var SaveName = 'Nombre x' // No puede reasignarse ni cambiarse el valor desde ningun lado de la aplicación,
  //                           sino que, hay que disponer de ciertor metodos para realizar dichas asignaciones
  //                           de esta forma se esta generando un valor que es privado y al cual no se tiene acceso

  return {
    getName: () => {
      return SaveName
    },
    setName: (name) => {
      SaveName = name
    }
  }
}

const newPerson = person()
console.log(newPerson.getName()) // trae el valor actual almacenado en la variable
newPerson.setName('Víctor') //      Se le asigna un nuevo valor
console.log(newPerson.getName()) // Se trae el nuevo valor almacenado
