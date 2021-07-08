//Задание 1

// const firstNumber = Number(prompt("Назовите первое число"));
// const secondNumber = Number(prompt("Назовите второе число"));
// if  ( firstNumber > secondNumber){
//     alert (firstNumber + ' больше ' + secondNumber + ' :)');
// } if  ( firstNumber < secondNumber){
//     alert (firstNumber + ' меньше ' + secondNumber + ' :)');
// } if  ( firstNumber === secondNumber){
//     alert ("Ничия :)");
// }            


//Задание 2

// const firstNumber = Number(prompt("Первое число"));
// const secondNumber = Number(prompt("Второе число"));
// const mathOperation = prompt("Математическая операция")
// switch (mathOperation){
//     case "+":
//         alert (firstNumber + secondNumber);
//         break;
//         case "-":
//         alert (firstNumber - secondNumber);
//         break;
//         case "*":
//         alert (firstNumber * secondNumber);
//         break;
//         case "/":
//         alert (firstNumber / secondNumber);
//         break;
//     default:
//         alert ("Я не калькулятор")    

// }


//Задание 3

const minChildAge = 12;
const maxChildAge = 18;
const minOldAge = 60;
const maxOldAge = 80;
const visitorAge = Number(prompt("Ваш возраст"));
const parentsPermit = confirm("Разрешение родителей?");

if (visitorAge >= maxChildAge && visitorAge <= maxOldAge){
    alert ("Вам можно");
} else if (visitorAge >= minChildAge && visitorAge <= 80 || parentsPermit) {
    alert ("Вам можна")
}else {
    alert ("Вам нельзя")
}


/// // } else if (visitorAge <= maxChildAge){
// }




