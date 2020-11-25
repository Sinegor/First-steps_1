
// let dictionary = Object.create(null);
// dictionary.toString = function (){
//     return Object.keys(this).join(", ");
// }
// Object.defineProperty(dictionary, "toString", {writable: true, enumerable: false, configurable:true});
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }
// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// // Использование
import {a_0} from './15.07.js';
alert (a_0);