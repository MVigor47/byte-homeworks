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



if (visitorAge >= maxChildAge && visitorAge <= minOldAge) {
    alert ("Вам можно");
} else if (visitorAge >= minChildAge && visitorAge <= maxChildAge || visitorAge >= minOldAge && visitorAge <= maxOldAge) {
    const parentsPermit = confirm("Разрешение родителей?");
    if (parentsPermit == true){
        alert ("Вам можно")
    } else {
        alert ("Вам нельзя")
    }} else {
        alert ("Вам нельзя")
    }





///  // } else if (visitorAge <= maxChildAge){
// }




