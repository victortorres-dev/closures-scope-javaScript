const buildCount = (i) => {
  let count = i
  const displayCount = () => {
    console.log(count++)
  }
  return displayCount
}

const myCount = buildCount(2)
myCount()
myCount()
myCount()

const myOtherCount = buildCount(10)
myOtherCount()
myOtherCount()
myOtherCount()
