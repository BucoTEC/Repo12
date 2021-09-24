// Only change code below this line
function rangeOfNumbers(startN, endN) {
  var cifra = [];
  if (startN > endN) {
    return "The starting number will always be less than or equal to the ending number";
  } else if (startN === endN) {
    return [endN];
  } else {
    rangeOfNumbers(startN, endN);
    cifra.push(endN - 1);
  }
  return cifra;
}

// Only change code above this line
// console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
// console.log(rangeOfNumbers(5, 5));
// console.log(rangeOfNumbers(7, 5));
