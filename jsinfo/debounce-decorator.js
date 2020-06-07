
function log(msg) {
  console.log(msg);
}

function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

log = debounce(log, 1000);

log('I');
setTimeout(() => { log('I am')}, 200);
setTimeout(() => { log('I am Piyush')}, 400);