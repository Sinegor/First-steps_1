// Проверка на спам
function checkMessage(a){
    control = a.toLowerCase();
   switch (true){
        case (control.includes ("xxx")):
           return true;
        case (control.includes ("viagra")):
            return true;
        default:
            return false;
   }
}
// Или:
// let offer = prompt("Что вы хотите предложить?");
// alert (checkMessage(offer));
// function checkMessage(str) {
//     let lowerStr = str.toLowerCase();
  
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }