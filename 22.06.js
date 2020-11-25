function sum (...arg){
    let previous =0;  
    return arg.reduce(function(previous, item){
        let sum = previous+item;
        return sum;
    },0)
};
console.log (sum(12, 34,1, 34,50));