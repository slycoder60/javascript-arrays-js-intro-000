chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles']

function addElementToBeginningOfArray(Burgers= ['Chicken Burgers', 'Camal Burgers']){
  return ['foo', ...Burgers]

}
function destructivelyAddElementToBeginningOfArray(myArray = [1,2]){
myArray.unshift('foo')
    return myArray
  }


function addElementToEndOfArray(evenNumbers = [2,4,6]){
  return [...evenNumbers, "foo"]
}

function destructivelyAddElementToEndOfArray(oddNumbers = [1,2]){
oddNumbers.push('foo')
  return oddNumbers
}

function accessElementInArray(array, index){
  array = [0,1,2,3]
  return array[3];

}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array = [0,1,2,3,4,5]
  return array.shift()
}
