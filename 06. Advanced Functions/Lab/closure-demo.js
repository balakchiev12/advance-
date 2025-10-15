function getFibonator() {
  let counter = 0;

  /* anonymus function/*/ return function () {
    counter++;
    console.log(counter);
  };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib());
