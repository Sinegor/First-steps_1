"use strict";
// // Объекты


// // Поверка на пустоту:

// // Мой вариант:
// // function isEmptyObj (obj){
// //    i=0;
// //    for (let key in obj){
// //       i++;
// //    }
// //    return (i!=0)?false:true;
// // }
// // let user ={
// //    name: "HZ"
// // };
// // console.log (isEmptyObj(user));

// // Проще:
// function isEmptyObj (obj){
//       for (let key in obj){
//       return false;
//    }
//    return true;
// }
// let user ={
//    name: "HZ"
// };
// console.log (isEmptyObj(user));


// Сумма свойств

// let salaries = {
//    John: 100,
//    Ann: 160,
//    Peter: 130
//    };
// let sum =0;
// function SumObj (obj){
//       for (let key in obj){
//          // sum = sum+obj[key];
//          sum +=obj[key];
//       }
// return sum;
// };
// console.log (SumObj(salaries));


// Проверка свойств объекта на число и умножение:

let menu = {
   width: 200,
   height: 300,
   title: "My menu",
   age: "31"
 }
 function multiplyNumeric (obj){
    for (let key in obj){
      if (!isNaN(+obj[key])){
         obj[key]*=2;
      } 
   }
 }
multiplyNumeric(menu);
console.log (menu);