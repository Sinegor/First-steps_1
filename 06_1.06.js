// Индекс тайности
let t =+prompt("Укажите свой возраст")*365;
let k_s =+prompt ("Укажите индекс событийности своей жизни от 1 - конченный обыватель до 100 - человек мирового значения");
let k_z = +prompt ("Укажите индекс значимости, проищошедших с вами событий, для формирования вашей личности от 1 до 10")/10;
let k_un = +prompt ("Укажите индекс вашей скрытности от 1 - паталогическое отсутствие секретов до 100 - тайные вторые и третьи жизни")/100;
let E = t+t*k_s*k_z;
console.log(E);
let E_un =  (1/5*t*k_s*k_z*k_un)/E*100;
console.log(E_un);
alert (E);
alert (`Скорее всего обём  вашей тайной жизни составляет${E_un} процетов`); 
