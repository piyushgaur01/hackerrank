// Decorators and forwarding, call/apply

// Delaying decorator: Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function f(x) {
  console.log(new Date());
  console.log(x);
}

function delay(fn, time){
    return function(x){
      return setTimeout(() => {
        fn(x)
      }, time);
    };
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 2000);

console.log(new Date());
f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms