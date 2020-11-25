// // Рекурсия функций
// // Сложение
// function sumTo(n){
//     let sum =0;
//     for (let i=1; i<=n; i++){
//         sum +=i;
//     };
//     return sum;
// };
// console.log (sumTo(10000));

// 1.2
// function sumTo(n){
//     if (n==1){
//         return 1;
//     } else {
//         return n + sumTo(n-1);
//     }
// }
// console.log (sumTo(10000));

// 2.1
// Факториал
// function made_n(n){
//     if (n==1){
//         return 1;
//     } else{
//         return n*made_n(n-1)
//     }
// }
// console.log (made_n(5))

//  Фибоначи
// 3.1
// function fib (n){
//     let sum_fib = [1,1]
//     if (n==1||n==2){
//         return sum_fib[0];
//     } else{
//         for (let i=2; i<n; i++){
//             sum_fib.push(sum_fib[i-2]+sum_fib[i-1]);
//             }
//       return sum_fib[n-1];
//     }
// };
// 3.2
// function fib (n){
// let a= 1;
// let b = 1;
//     for (let i=3; i<=n; i++){
//         let c = a+b;
//         a=b;
//         b=c;
//     }
//     return b
// }
// console.log (fib(77))

// 4 Метод фильтр с вложенной функцией.
// let arr = [12,3,54,76,76,3,2,7,12,]
// function inBetween(a, b) {
//     return function (iteam){
//         if (iteam>=a&&iteam<=b) return iteam;
//     };
// };
// console.log (arr.filter(inBetween(4,23)));

// 5
// let arr = [12,3,54,76,76,3,2,7,12,]
// function inArray (arr){
//     return function (iteam){
//         if(arr.includes(iteam)) return iteam;
//     } 
// }
// console.log (arr.filter(inArray([2,7])));
// 6 сортировка
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];
// function byField (field) {
//     return (a,b)=>a[field]>b[field]? 1: -1;
//     };

// console.log(users.sort(byField('name')));

// 7
function makeArmy() {
    let shooters = [];
    for (let i =0; i<10; i++){
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
        };
      return shooters;
  };
  
  let army = makeArmy();
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...