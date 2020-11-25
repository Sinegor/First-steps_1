// Proxy
// let user = {
//   name: "John"
// };

// function wrap(target) {
//   return new Proxy(target, {
//       get (target, prop){
//         if (prop in target){
//           return target[prop]
//         } else{
//           alert ("Ошибка: такого свойства не существует")
//           throw new Error ("Ошибка: такого свойства не существует")
//         }
//       }
//   });
// }
// user = wrap(user);
// alert(user.name); // John
// alert(user.age); 

// let user = {
//   name: "John"
// };

// function wrap(target) {
//   return new Proxy(target, {
//     get(target, prop, receiver) {
//       if (prop in target) {
//         return Reflect.get(target, prop, receiver);
//       } else {
//         throw new ReferenceError(`Свойство не существует: "${prop}"`)
//       }
//     }
//   });
// }
// user = wrap(user);
// alert(user.name); // John
// alert(user.age);

// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, prop){
//     if (prop<0){
//       return target[target.length+(+prop)];
//     } else {
//       return Reflect.get(target,prop);
//     }
//   }
// });
// alert (array[2]);
// alert( array[-1] ); // 3
// alert( array[-6] ); // 2

function makeObservable(target){
  return new Proxy (target, {   
      set (target, prop, value){
      target[prop] = value
      alert (`SET ${prop}:${value}`)
      return true
    }
});
}
let user = {};
user = makeObservable(user);
user.name = "John"; // выводит: SET name=John
user.name = "Henry";
user.age = 34;