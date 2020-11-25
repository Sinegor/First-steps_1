// Логин/пароль
let message = prompt("Введите своё имя!")
let parole
switch(true){
    case (message=="Админ"):
        parole = prompt("Введите пароль!");
        switch (true){
            case(parole=="Я главный"):
                alert("Привет! Проходи.");
                break;
            case (parole==null):
                alert("Отмена!");
                break;
            default:
                alert("Неверный пароль!");
                break;
                }    
        break;
    case (message ==null):
        alert("Отмена!")
        break;
    default:
        alert("Я вас не знаю. Уходите!");
}
alert(parole);