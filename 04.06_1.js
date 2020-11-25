// Проверка на число
function readNumber (){
let number;
while (true){
    number = prompt("Введите любое число");
    if (!isNaN(+number)) break;
}
    if (number==null||number==""){
        return null;
    }
    else{
        return (number);
    }
}
alert (`Ваше число: ${readNumber()}`)
