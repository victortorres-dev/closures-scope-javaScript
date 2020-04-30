// Un closure combina una función y el ámbito léxico de donde fue declarada dicha función
// un closure recuerda el ámbito en el cual ha sido creado

const moneyBox = (coins) => {
  var saveCoins = 0 // variable en el ambito de la funcion
  saveCoins += coins
  console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5)
moneyBox(10)

// Manejando la estructura de un closure

const moneyBoxClosure = () => {
  var saveCoins = 0
  
  // Estructura del closure
  const countCoins = (coins) => {
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins
}

let myMony = moneyBoxClosure()
myMony(5)
myMony(10) // Recuerda el valor anterior
