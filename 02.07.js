// 1
// function unique(arr) {
//    let set_current = new Set (arr);
//    let new_arr=[];
//    set_current.forEach( function (value, valueAgain){
//         new_arr.push(value);
//    });
//    return new_arr;
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
// console.log (unique(values));
  
// 2.1 анаграммы
// function allClean(arr){
//   let new_arr = Array.from(new Set(arr));  
// //   console.log(new_arr);
//   for (let i =0; i<=new_arr.length-1; i++){
//       let word = (new_arr[i]);
//         for (let j=0; j<=new_arr.length-1; j++){
//             if (word!==new_arr[j]) {
//                  word_1 = word.toLowerCase().split("").sort().join("");
//             // console.log(word_1);
//                 word_current = new_arr[j].toLowerCase().split("").sort().join("");
//             // console.log(word_current);
//                 if (word_current==word_1){
//                     new_arr.splice(j,1);
//                     --j;
//              }
//             }
//             }
//         }
//     return new_arr;
//   }

//   let arr_1 = ["hgf", "ghf", "fgh", "fd", "df","Df","dF"];
// // allClean(arr_1);
//  console.log (allClean(arr_1));

// // 2.2 Анаграммы
// function allClean(arr){
//     let new_arr = Array.from(new Set(arr));  
//     let words = {};
//     for (word of arr){
//         word_1 = word.toLowerCase().split("").sort().join("");
//         words[word_1] = word;
//     }
//     return Object.values(words)
//     }
// let arr_1 = ["hgf", "ghf", "fgh", "fd", "df","Df","dF"];
//   // allClean(arr_1);
// console.log (allClean(arr_1));

// 3 Объекты.
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
// function sumSalaries(obj){
//     let arr = Object.values(obj);
//     let previous_value =0;
//     return arr.reduce(function(previous_value, iteam){
//         return previous_value+iteam;
//     },0)
// }
// console.log(sumSalaries(salaries));
// 4 Объекты
let user = {
    name: 'John',
    age: 30
  };
//   alert( count(user) ); // 2
function countFichers(obj){
      return Object.keys(obj).length
  };
console.log(countFichers(user));  

  
