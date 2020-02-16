chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles']

function addElementToBeginningOfArray(Burgers= ['Chicken Burgers', 'Camal Burgers']){
  return ['foo', ...Burgers]

}
function destructivelyAddElementToBeginningOfArray(myArray = [1]){
  var myArray = [1];
  return myArray.unshift('foo')
}

function addElementToEndOfArray(evenNumbers = [2,4,6]){
  return [...evenNumbers, "foo"]
}

function destructivelyAddElementToEndOfArray(oddNumbers = [1]){
  return oddNumbers.push('foo')
}
