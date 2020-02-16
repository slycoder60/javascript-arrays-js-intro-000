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

function accessElementInArray(familyMembers = ['mom', 'dad','brother']){
  return familyMembers[0]
}
