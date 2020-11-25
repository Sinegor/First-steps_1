function spy(func) {

    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, arguments);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }
function sum (12,34,24,555,231){
        
    return arguments["0"];
}
sum = spy(sum);
sum (2,3,6,10);
console.log (wrapper.calls)