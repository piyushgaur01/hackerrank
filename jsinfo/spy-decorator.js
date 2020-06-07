// Decorators and forwarding, call/apply

// Spy decorator
// importance: 5
// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

function work(a, b) {
  return( a + b ); // work is an arbitrary function or method
}

function spy(fn){
  function wrapper(...args){
    wrapper.calls.push(args);
    return function(){
      return fn.call(this, args);
    }
  }
  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
