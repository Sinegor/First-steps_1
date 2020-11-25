// ПРомисы
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     })
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// function demoGithubUser() {
//   let name = prompt("Введите логин?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }
// demoGithubUser();

// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
 
// async function loadJson(url) {
//     let response = await fetch(url);
//     console.log (response);
//     if (response.status == 200){
//         let json_0 = await response.json();
//           return json_0;
//     } else {
//           throw new HttpError(response);
//         }
//       }
//   // Запрашивать логин, пока github не вернёт существующего пользователя.
//  async function demoGithubUser(){
//   let name,
//       user;
//   while (true){
//         try{
//           name = prompt("Введите логин?", "iliakan");
//           user = await loadJson(`https://api.github.com/users/${name}`)
//           alert(`Полное имя: ${user.name}.`);
//           break;
//         }
//         catch (err) {
//               console.log (err)
//               if (err instanceof HttpError ) {
//               alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
              
//            }
//            else {
//              throw err;
//            }
//         }
//       }
//     return user;
//     }
// demoGithubUser();
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 4000));
  return 10;
}
function f() {
return wait().then(alert)
}
f()