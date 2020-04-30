/*
 Los closures pueden crearse de diferentes formas, pero también de forma involuntaria
 ... recordar el valor en el contexto en que fue creado
*/
const anotherFunctionVar = () => {
  for (var i = 0; i < 10; i++) { // al colocar var en lugar de let o const,
    //                              se esta accediendo al último valor que tiene asignado la variale i,
    //                              por ello se esta accediendo al valor guardado en ese closure,
    //                              por lo que involuntariamente se estaa generando un closure que no cumple con el ojetivo requerido
    console.log(i)
    setTimeout(() => {
      console.log(i)
    }, 1000)
    console.log(i)
  }
}

anotherFunctionVar()

// lo anterior se resuelve con la palabra reservada let, la cual permite manejar
// un scope de tipo bloque dentro de la iteracion para tener unicamente el alncance
// que va a recordar del valor que es necesario
// las ventajas del closure se dan en el manejo de valores privados o la signacion de metodos
