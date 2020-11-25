"use strict";
// Массивы:
// 1:
// let styles = ["Jazz","Blues","hjhsfjh"];
// styles.push("Rock-n-roll");
// function CheckLength (j){
//     if (j>1){
//        return  Math.floor(j/2);
//     }
//         return J++;
//     // let result;
//     // return (j>1)?(result=Math.ceil(j/2)):(result=j++);
// }
// let massposition = CheckLength(styles.length);
// styles[massposition]="Classic";
// console.log (styles);
// console.log(styles.shift());
// styles.unshift("Rap", "Reggi");
// console.log (styles);

// 2:
// let numbers =[];
// while (true) {
//     let numbers_0 = prompt("Введите любое число");
//     if (isNaN(numbers_0)||numbers_0===null||numbers_0===""){
//         break;
//     }
//     numbers.push(+numbers_0);
// };
// // console.log(numbers);
// function CheckSumm (massiv){
//     let summ=0;
//     for ( let num of massiv){
//         summ = summ+num;
//     }
//     return summ;
// }
// if (numbers.length==0){
//     alert ("Ошибка! Вы не ввели ни одного числа!");
// }
// else{
// alert ("Сумма введённых вами чисел составляет: "+ CheckSumm(numbers));
// }

// 2_1:
// function CheckSumm (){
// let numbers =[];
// while (true) {
//     let numbers_0 = prompt("Введите любое число");
//     if (isNaN(numbers_0)||numbers_0===null||numbers_0===""){
//         break;
//     }
//     numbers.push(+numbers_0);
// }
// if (numbers.length===0){
//     alert ("Ошибка! Вы не ввели ни одного числа!");
    
// }
// else{
//     let summ=0;
//     for ( let num of numbers){
//         summ = summ+num;
//     }
// alert ("Сумма введённых вами чисел составляет: "+ summ);
// return summ;
// }
// }
// CheckSumm();

// 3
// let numbers =[];
// while (true) {
//     let numbers_0 = prompt("Введите любое число");
//     if (isNaN(numbers_0)||numbers_0===null||numbers_0===""){
//         break;
//     }
//     numbers.push(+numbers_0);
// }
// let ArraySum =[];
// function getMaxSubSum (massiv){
//     // console.log (massiv.length-1);
//     // console.log(massiv);
//     let max_sum =0;    
//     for (let i=0; i<=massiv.length-1; i++){
//         let sum =0;
//         for (let j=i; j<=massiv.length-1; j++){
//             sum = sum+massiv[j];
//             max_sum = Math.max(max_sum, sum);
//             if (sum>=0) ArraySum.push(sum);
//         }
//     }
// console.log (ArraySum);
// return (ArraySum.length==0)?(alert("Ошибка! Вы ввели только отрицательные числа.")):
// (alert ( "Максимальная сумма последовательности:"+ max_sum));
// }
// getMaxSubSum(numbers);

// 4

// let numbers =[];
// while (true) {
//     let numbers_0 = prompt("Введите любое число");
//     if (isNaN(numbers_0)||numbers_0===null||numbers_0===""){
//         break;
//     }
//     numbers.push(+numbers_0);
// }
// function getMaxSubSum (massiv){
//     // console.log (massiv.length-1);
//     // console.log(massiv);
//     let max_sum =0;    
//     let current_sum =0;
//     for (let i=0; i<=massiv.length-1; i++){
//         current_sum += massiv[i];
//         if (current_sum<0) current_sum=0;
//         max_sum = Math.max(max_sum, current_sum);
//     }
// return alert ( "Максимальная сумма последовательности:"+ max_sum);
// }
// getMaxSubSum(numbers);

// 5
let fruits = ["apple", "watervtlone", "peach"];
// fruits.length = 6;

let spisok = {
    name: "Dmitry",    age:34,
    country: "Czhesh",
    job:    true,
}
fruits.push(spisok);
fruits.push ({name: "Dmitry",
age:43
})
// let result = fruits.find(function (current_value){
// return current_value.country == "Czhesh";
// })
let result = fruits.filter(current_value=>current_value.age<40);
console.log(result);
