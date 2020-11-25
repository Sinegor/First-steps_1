"use strict";
// Массивы:
//1:
//  let massiv;
// function editString (string){
// massiv = string.split("-");
//     for (let i=1; i<=massiv.length-1;i++ ){
//         massiv[i] = massiv[i][0].toUpperCase()+massiv[i].slice(1);
//     }
// return massiv.join(" ");
// r
// }
// let string_0 ="my-short-string"
// let result = editString(string_0);
// console.log(result);

// 1.1: 
// let massiv;
// function editString (string){
//     massiv=(string.split("-")).map(function(word, index){
//     return (index!==0)?(word = word[0].toUpperCase()+word.slice(1)):(word=word)
//     })
//     return massiv.join(" ");
// };
// let string_0 ="my-short-string"
// let result = editString(string_0);
// console.log(result);

// 2.1
// let new_massiv =[];
// function  filterRange(mass, a, b){
//     for (let i=0; i<=mass.length-1; i++){
//         if (mass[i]>a&&mass[i]<b) new_massiv.push(mass[i]);
//                             }
// return new_massiv;
// }
// let massiv_0 = [1,3,45,5,56,32,345,7,11,22];
// console.log(filterRange(massiv_0,5,45));

// 2.2
// let new_massiv =[];
// function  filterRange(mass, a, b){
//     for (let number of mass) {
//         if (number>a&&number<b) new_massiv.push(number);
//                             }
// return new_massiv;
// }
// let massiv_0 = [1,3,45,5,56,32,345,7,11,22];
// console.log(filterRange(massiv_0,5,45));

// 3.1
// function filterRangeInPlace(mass, a, b){
//     for (let i=0; i<=mass.length-1; i++){
//         if (mass[i]<a||mass[i]>b) {
//         mass.splice(i, 1);
//         i--;
//     };
//     };
//     };
// let massiv_0 = [1,3,45,5,56,32,345,7,11,22];
// filterRangeInPlace(massiv_0, 13,50);
// console.log(massiv_0);

// 4.1
// function getSort(arr){
//     arr.sort(function(a,b){
//     if (a>b) return -1;
//     if (a==b) return 0;
//     if (a<b) return 1;
//     })
// }
// let massiv_0 = [1,3,45,5,56,32,345,7,11,22]
// getSort(massiv_0);
// console.log(massiv_0);

// 4.2
// function getSort(arr){
//     arr.sort((a,b)=> -(a-b))
// }
// let massiv_0 = [1,3,45,5,56,32,345,7,11,22]
// getSort(massiv_0);
// console.log(massiv_0);

// 5.1
// function getSort(arr){
// let massiv_0 = arr.concat();
// return massiv_0.sort();
// };
// let massiv = ["dfgd", "add", "nbvkof","cdjkj"];
// let massiv_new = getSort(massiv);
// console.log (massiv);
// console.log(massiv_new);

// 6.1

// function summator (string){
//     let massiv = string.split(" ")
//     // return (massiv[1]=="+")?(massiv[0]+massiv[2]):
//     // (massiv[1]=="-")?(massiv[0]-massiv[2]);
//     if (massiv[1]=="+") return +massiv[0]+(+massiv[2]);
//     if (massiv[1]=="-") return (massiv[0]-massiv[2]);
// }
// let string_base = "123 - 5";
// console.log(summator(string_base));

// 7.1 Массив объектов
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names =users.map(function(item){
//     return item.name
// })
// console.log (names);

// 8.1-8.2
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// // let users_new = [];
// // users.forEach(function(item){
// //     users_new.push({id:item.id, fullname: item.name+" "+item.surname})
// // })
// let users_new = users.map(function(item){
// return {id:item.id, fullname: item.name+" "+item.surname}
// });
// console.log (users_new)

// 9.1
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [ vasya, petya, masha ];
// arr.sort(function (a,b) {
//     return a["age"] - b["age"]
// });
// console.log (arr);

// 10.1

// let numbers =[1,34,67,23,678,2]
// function shufleArray (arr){
//     return arr.sort(function (){
//         return Math.random()-0.5
//     })
// };
         
// 11.1
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverageAge(arr){
//     let age_sum =0;
//     arr.forEach(function (item){
//         age_sum+=+item["age"]
//         console.log(age_sum)
//     })
// return age_sum/arr.length
//     };
// console.log (getAverageAge(arr))

// 11.2
// function getAverageAge(arr){
//     return arr.reduce(function(previous, item,){
//         return previous+item["age"]/arr.length
// },0);
//     };
// console.log (getAverageAge(arr))

// 12.1
let words = ["as", "dfr", "as","dssf","ds", "ds", "jh",2134, 342,"dfr"]
function unique (arr){
    let result =[]
    for (let i=0; i<arr.length;i++){
        if ((arr.filter(item=>item==arr[i])).length==1)result.push(arr[i])
    }
    return result
};
console.log (unique(words));