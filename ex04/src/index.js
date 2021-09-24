// Only change code below this line
function sumFibonacci(num) {
  var i;
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= 10; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
  }
}
// Only change code above this line

console.log(sumFibonacci());
module.exports = sumFibonacci;
