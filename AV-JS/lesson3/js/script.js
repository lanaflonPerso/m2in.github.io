let nameUser;
nameUser = prompt("Здравствуйте. Пожалуйста, введите Ваше имя...");
let number1;
number1 = prompt("Пожалуйста, введите любую цифру от 0 до 9...");
let number2;
number2 = prompt("Пожалуйста, введите ещё один раз любую цифру от 0 до 9...");

function calc(a,b){
  document.write("Произведение введённых Вами цифр = " + (a*b) + " ;)<br>");
}

function baner(a){
  document.write(a + ", " + "пора кодить!<br>");
}

calc(number1,number2);
baner(nameUser);
// ---------------------------------------------------------------
// function calc(a,b){
//   console.log(a+b);
// }
// calc(5,-1);
// calc(5,3);
// calc(4,-2);
// calc(7,-9);
// calc(1,-1);
// ---------------------------------------------------------------

// // передаём аргументы функции

// function namefun(args) {
//   document.write("Привет МИР! " + args + ", и тебе привет! ;)<br>");
// }

// // затем по её имени осуществляется вызов/инициализация функции
// namefun("Дмитрий");
// namefun("Сергей");
// namefun("Ольга");

// ---------------------------------------------------------------

// // Сначала функцию объявляем и описываем

// function namefun() {
//   document.write("Привет МИР!");
// }

// // затем по её имени осуществляется вызов/инициализация функции
// namefun();
// ---------------------------------------------------------------

