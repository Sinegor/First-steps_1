// // // // Объекты. This
// // // "use strict"
// // // function Calculator(){
// // //   this["numbersForsum"]=[];
// // //   this.indexNumforSum =0;
// // //   // Calculator.indexNumformul= prompt("Скажите, сколько цифр вы хотите ввести для умножения?")
// // //   this.read = function (){
// // //     this.indexNumforSum = +prompt("Скажите, сколько цифр вы хотите ввести для математических действий?");
// // //     for (let i =1; i<=this.indexNumforSum; i++){
// // //     this["numbersForsum"].push(+prompt("Введите число"));
// // //   };
// // //   };
// // //   this.summator = function(){
// // //     this.summa = null;
// // //     for (let i =0; i<= this.indexNumforSum-1; i++){
// // //       this["summa"] +=this["numbersForsum"][this.numbersForsum.length-1-i];
// // //       // alert (this.numbersForsum[+this.numbersForsum.length-1-i])
// // //       // console.log (this["numbersForsum"][+this.numbersForsum.length-1-i]);
// // //     };
// // //     return alert ("Сумма равна: "+this["summa"]);
// // //   };
// // //   this.mulator = function (){
// // //       this.mul = null;
// // //       for (let i =0; i<= this.indexNumforSum-1; i++){
// // //         this["mul"]= this["mul"]* this["numbersForsum"][this.numbersForsum.length-1-i];
// // //     };
// // //       return alert ("Произведение равно: "+this["mul"]);
// // //   };
// // // };
// // // let calculator_user = new Calculator;
// // // calculator_user.read()
// // // calculator_user.summator()
// // // calculator_user.mulator();

// // // 2.
// // // Объекты. This
// // "use strict"
// // function Accumulator(startingValue){
// //   this.data= {
// // "current sum": 0,
// // "currentAmount": startingValue,
// // "currentNumberFromUser": 0,
// //   };
// //   this.read = function (){
// //     alert("Когда захотите остановить ввод чисел и получить итоговую сумму, нажмите Отмена")
// //    while (true){
// //     let numberFromUser = prompt("Введите очередное число!");
// //     if (!isFinite(numberFromUser)||numberFromUser==null||numberFromUser=="") {
// //       break;
// //     }
// //     this.data.currentNumberFromUser=+numberFromUser
    
// //     this.data.currentAmount +=this.data.currentNumberFromUser;
// //    }
// //    return  this.data.currentAmount;   
// //   };
// // };
// // let accumulatorOfuser = new Accumulator(2);
// // accumulatorOfuser.read();
// // accumulatorOfuser.read();
// // console.log("Итоговая сумма: "+ accumulatorOfuser.data.currentAmount);
// // console.log(accumulatorOfuser);
    
// //     // alert (this.numbersForsum[+this.numbersForsum.length-1-i])
// //       // console.log (this["numbersForsum"][+this.numbersForsum.length-1-i]);

// // Распознаватель операторов в строках
// let calculator_user = new function() {
//   this.data = {};
//   this.data.current_str  = [];
//   this.data.result = null;
//   this.summator = function () {
//     this.data.current_str = (prompt ("Введите выражение"  )).split(" ");
//     // console.log (this.data.current_str[1], this.data.current_str[0], this.data.current_str[2])
//     // switch(true){
//     //   case(this.data.current_str[1]=="+"):
//     //   this.data.result = +this.data.current_str[0]+(+this.data.current_str[2]);
//     //   case(this.data.current_str[1]==="-"):
//     //   this.data.result = +this.data.current_str[0] - (+this.data.current_str[2]);
//     //   case(this.data.current_str[1]==="*"):
//     //   this.data.result = +this.data.current_str[0] * (+this.data.current_str[2]);
//     //   case(this.data.current_str[1]==="/"):
//     //   this.data.result = +this.data.current_str[0] / (+this.data.current_str[2]);
//     // };
//     if (this.data.current_str[1]=="+")  this.data.result = +this.data.current_str[0]+(+this.data.current_str[2]);
//     if (this.data.current_str[1]==="-") this.data.result = +this.data.current_str[0] - (+this.data.current_str[2]);
//     if (this.data.current_str[1]==="*") this.data.result = +this.data.current_str[0] * (+this.data.current_str[2]);
//     if (this.data.current_str[1]==="/") this.data.result = +this.data.current_str[0] / (+this.data.current_str[2]);
//   };
// };
// calculator_user.summator()
// console.log(calculator_user.data.result)

function Calculator_user() {
  this.operators = {
                    "+":  (a,b)=>a+b,
                    "-":  (a,b) => a-b,
    };
  this.summator = function () {
    this.current_str = (prompt ("Введите выражение"  )).split(" ");
        for (let key in this.operators){
          if (this.current_str[1] == key) {
             this.result = this.operators[key] (+this.current_str[0], +this.current_str[2]);
          }
       }
      }
  this.addMethod = function(operator, func) {
      this.operators[operator] = func;
  };
    }
let my_calculator = new Calculator_user;
my_calculator.addMethod ("*", (a,b)=>a*b);
my_calculator.addMethod("/",(a,b)=>a/b );
my_calculator.addMethod("**", (a,b)=>a**b);
my_calculator.summator();
console.log (my_calculator.result);
