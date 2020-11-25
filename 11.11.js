"use strict";
//Задача 1
//  let picture = "#"
// for (let i =1; i<=8; i++ ){
//     console.log (`${i}.${picture}`);
//     picture = picture+"#"
// }

// // Задача 2
// for (let i =1; i<=100; i++){
//     if (i%3==0&i%5==0){
//         console.log ("FuzzBuzz");
//     } else if (i%3==0) {
//         console.log ("Fuzz");
//     } else if (i%5==0) {
//         console.log ("Buzz");
//     } else {
//         console.log (i);
//     }
// }   

// // Задача №3
// for (let i =1; i<=8; i++){
//     if (i%2==0){
//         console.log (`${i}# # # # `)
//     } else{
//         console.log (`${i} # # # #`)
//     }
// }

// Задача №4
// function strL(str, sym){
//     let index = str.indexOf (sym)
//     if (index==-1){
//         return false;
//     } else{
//         return index;
//     }
// }
// let str_1 = "dfwfgg"
// console.log (strL(str_1,"w"))

// Задача №5:
// function summator(num_1, num_2, step){
//     let sum =0;
//     if (!isFinite(step)||step<1){
//         for (let i = num_1; i<=num_2; i++){
//             sum+=i;
//         }
//     } else {
//         let i = num_1;
//         while (i<=num_2){
//             sum+=i
//             i=i+step;
//             continue;
//         }
//     }
//     return sum;
// }
// console.log (summator(1,4,0))

// Задача №6:
// let arrays = [45, 78, [1, 2,["df",34,[12,34]], 3], [4, 5], [6], 54];
// let newArr=[];
// function makeArray (arr, arr_1){
//     for (let iteam of arr){
//         if (Array.isArray(iteam)){
//             makeArray(iteam, arr_1);
//         } else{
//             arr_1.push(iteam);
//         }
//     }
//     return arr_1;
// }
// console.log (makeArray(arrays,newArr));

// // Задача №7:
// let box = {
//     locked: true,
//     unlock: function() { this.locked = false; },
//     lock: function() { this.locked = true;  },
//     _content: [],
//     get content() {
//       if (this.locked) throw new Error("Заперто!");
//       return this._content;
//     }
//   };
// function withBoxUnlocked(func){
//     if (box.locked){
//         box.unlock();
//         try{
//             func();
//         } catch (e){
//             throw e;
//         } finally {
//             box.lock();
//         }
//     } else{
//         try{
//             func();
//         } catch (e){
//             throw e;
//         }
//     }
// };
// withBoxUnlocked(function() {
//     box.content.push("золотишко");
//   });
//  try {
//  withBoxUnlocked(function() {
//       throw new Error("Пираты на горизонте! Отмена!");
//     });
//   } catch (e) {
//     console.log("Произошла ошибка:", e);
//   }
// console.log(box.locked);

// Задача №8:
let ferma = {
    Horse:{
        H1:{
            name: "vasya",
            age: 10,
        },
        H2:{
            name: "vasya_1",
            age: 1,
        }, 
        H3:{
            name: "vasya_2",
            age: 10,
            child:{
                H1:{
                    name: "vas",
                    age: 1,
                },
                H2: {
                    name: "vas_1",
                    age: 3,
                },
            },
        },
        H4:{
            name: "vas_34",
            age: 3,
        },
    }
};
function ageAnimal(obj, emptyArr){
    for (let scot in obj ){
        if (typeof(obj[scot]==Object)){
            ageAnimal(obj[scot]);
        } else if (scot == "age"){
            emptyArr.push(obj[scot]);
        }
        }
       return emptyArr.reduce((a,b)=>(a+b))
}
let age =[];
console.log (ageAnimal(ferma, age))  