// Урезание строки до нужной длинны
function truncate (str, maxlength){
    return (str.length > maxlength) ? str.substr(0, maxlength) + '…' : 
    str;
// Или так
    // if (str.length<=maxlength){
    //     return str;
    // }
    // else{
    //     return (str.substr(0,maxlength)+"...");
    // }
}
let max = +prompt("введите максимальную длинну строки!");
let str_1 = prompt ("Что вы хотите сказать?");
alert (truncate(str_1, max));