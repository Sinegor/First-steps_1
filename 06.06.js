// Генератор случайных чисел с точкой
function randomNumber (){
while (true){
    let min =+prompt ("Введите минимальное значение!");
    let max =+ prompt ("Введите максимальное значение!");
    if (min>=max||isNaN(min)||isNaN(max)){
        alert ("Вы ввели некорректные значения. Попробуйте ещё раз!");
        continue;
    }
        else{
            return (max-min)*Math.random()+min;
    
        }
    }
}
alert (`Случайное число в нужном вам диапазоне: ${randomNumber()}`);

// Генератор случайных целых чисел:
// function randomNumber (){
//     while (true){
//         let min =+prompt ("Введите минимальное значение!");
//         let max =+ prompt ("Введите максимальное значение!");
//         if (min>=max||isNaN(min)||isNaN(max)){
//             alert ("Вы ввели некорректные значения. Попробуйте ещё раз!");
//             continue;
//         }
//             else{
//                 return Math.floor((max-min+1)*Math.random()+min);
       
//             }
//         }
//     }
//     alert (`Случайное число в нужном вам диапазоне: ${randomNumber()}`);

// ПРоверка:
function randomNumber (min, max){
          return Math.floor((max-min+1)*Math.random()+min);
          }
         
   let counter = {
    1: 0,
    2: 0,
    3: 0,
    };
    for (let i = 0; i < 10000; i++) {
        let result = randomNumber (1,3);
        if (result == 1) counter[1]++;
        if (result == 2) counter[2]++;
        if (result == 3) counter[3]++;
    }
    console.log (counter);