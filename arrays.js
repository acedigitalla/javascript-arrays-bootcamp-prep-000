var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element) {
    const moreArray = [...array, element];
  return moreArray;
}
function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element);
  return array;
}
function accessElementInArray(array, index) {
 return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
 return array;
}
function removeElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  var newArray = array.slice(1);
  return newArray;
=======
  array.slice(1);
>>>>>>> c06200efd5c174b85c9ef5e94ca516059f7ec97d
 return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
 return array;
}
function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
 return newArray;
}
