chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles']

function addElementToBeginningOfArray(Burgers= ['Chicken Burgers', 'Camal Burgers']){
  return ['foo', ...Burgers]

}
function destructivelyAddElementToBeginningOfArray(myArray){
  myArray.upshift
  return myArray
}

function addElementToEndOfArray(evenNumbers = [2,4,6]){
  return [...evenNumbers, "foo"]
}

function destructivelyAddElementToEndOfArray(oddNumbers = [1]){
  return oddNumbers.push('foo')
}
