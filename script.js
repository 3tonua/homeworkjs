var user = "Anton";

var admin = user;

console.log(admin);




var login = prompt("Ваш логин");

if (login == "Админ"){
    var password = prompt("Введите пароль");
    if(password == "Черный Властелин") {
        alert("Добро пожаловать!");
    } if (password == null){
        alert("Вход отменен");
    } if (password != "Черный Властелин"){
        alert("Пароль неверен");
    }
}  if (login == null) {
    alert("Вход отменен");
}
    else {
    alert("Я вас не знаю");
}