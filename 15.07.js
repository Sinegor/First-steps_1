"use strict";
// Декораторы:
// 1 Счётчик переменных/шпион
// function sum (a,b,c){
//     return a+b+c;
// };
// function monitoringVar(func){
//     function lookVar (...args){
//         lookVar.var.push(args);
//         return func.apply(this, arguments);
//     };
//     lookVar.var=[];
//     return lookVar;
    
// };
// sum = monitoringVar(sum);
// // console.log (typeof(sum));
// alert (sum(10,12,200));
// alert (sum(12,3333,1));
// alert (sum(1,2,8));
// for (let iteam of sum.var){
// alert ("var: "+ iteam.join(",") );
// };

// 1.1
// function sum (a,b,c){
//     return a+b+c;
// };
// function monitoringVar(func){
//     function lookVar (){
//             lookVar.var.push((Object.values(arguments)).join(","));
//             console.log (lookVar.var);
//             return func.apply(this, arguments);
//     };
//     lookVar.var=[];
//     return lookVar;
    
// };
// sum = monitoringVar(sum);
// // console.log (typeof(sum));
// alert (sum(10,12,200));
// alert (sum(12,3333,1));
// alert (sum(1,2,8));
// for (let iteam of sum.var){
// alert ("var: "+ iteam);
// };

// 2.1 Задержка
// function sum (a,b,c){
// return a+b+c;
// }
// function timerStart (func, ms){
//     // console.log (arguments);
//     return function(...args){
//         let savedThis=this;
//         setTimeout (function(){
//             func.apply(savedThis,args);
//         }, ms);
//     };
// }
// let start = timerStart(sum, 4000);
// alert (start(10,20,30));

// 2.2
// function f(x,y,z) {
//     return x+y+z;
//   };
//   function delay(f, ms) {
//      return function(...args) {
//       let savedThis = this; // сохраняем this в промежуточную переменную
//       setTimeout(function() {
//         f.apply(savedThis, args); // используем её
//       }, ms);
//     };
//   }
//   let f1000 = delay(f, 5000);
//   let f1500 = delay(f, 7500);
//   let in_23 = f1000(10,15,25);
//   console.log (in_23);
//   // показывает "test" после 1000 мс
//   f1500(25, 35,10);

// let f = debounce(alert, 1000);

// 3.1  Тормоза
// function debounce(func, ms){
//     let time_end;
//     return function (...args) {
//         console.log(time_end==undefined);
//         console.log(Date.now()-time_end>ms);
//         if (time_end==undefined||Date.now()-time_end>ms){        
//             func.apply(this, args);
//             time_end = Date.now();
//     } else {
//       return;   
//     }; 
// };
// }
// function show (){
//     alert ("Hello!")
// }
// let showMessage = debounce(show, 2000)
// showMessage()
// setTimeout (showMessage, 1000);
// setTimeout (showMessage, 2100);
// setTimeout (showMessage, 1000);

// 3.2
// function debounce(func, ms){
//     let countTime = false;
//     return function (...args) {
//         console.log (countTime);
//         if (countTime){
//             return;
//         } 
//         else{
//          func.apply(this, args);
//          countTime = true;
//          setTimeout (()=>countTime=false, ms);
//     }
//     }; 
// };
// function show (x){
//     alert (x)
// }
// let showMessage = debounce(show, 2000)
// showMessage("1")
// showMessage("2")
// setTimeout (showMessage, 3000,"3");
// setTimeout (showMessage, 2100,"4");
// setTimeout (showMessage, 5300,"5");

// 3.3 
// function debounce(f, ms) {

//     let isCooldown = false;
  
//     return function() {
//       if (isCooldown) return;
  
//       f.apply(this, arguments);
  
//       isCooldown = true;
  
//       setTimeout(() => isCooldown = false, ms);
//     };
  
//   }
//   let f = debounce(alert, 1000);

//   f(1); // выполняется немедленно
//   f(2); // проигнорирован
//   setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
//   setTimeout( () => f(4), 1100); // выполняется
//   setTimeout( () => f(5), 1500);


//   Function.prototype.defer = function (ms){
//     let trueThis = this;
//     return function  (...arg){
//         console.log (arg);
//         setTimeout (function (){
//             trueThis.apply(trueThis, arg)
//         }, ms);
//     };
// };
// function sum (a) {
//     alert (`Привет! ${a}`);
//   }
// sum.defer(3000)("Будак!");
export let a_0 = 1234;

