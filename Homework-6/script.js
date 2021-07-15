
// ЗАДАНИЕ №2


// function randomGenerator(start, finish) {
//     return Math.round(Math.random() * (start - finish ))+finish;
//   }

//   const result = randomGenerator (2,5)
//   console.log(`result`, result)



// ЗАДАНИЕ №1

  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  const getUpperCase=upperCase.split("");
  console.log(`getUpperCase`, getUpperCase)
  const getLowerCase=lowerCase.split("");
  console.log(`getLowerCase`, getLowerCase)
  const getNumberCase=numbers.split("");
  console.log(`getNumberCase`, getNumberCase)




  const  passwordEnter = () =>{
  let userPassword
  let isSuccess = false

  do{
    userPassword = prompt("Enter your password");
    if (!userPassword){
      alert("Enter your password")
      continue;
    }

    if(userPassword == getUpperCase&&getLowerCase&&getNumberCase){
      isSuccess=true;
    } else {
      alert("Your password is incorrect")
    }
  } while(!isSuccess)
  alert("Congrats")
}


























//   do {
//     PASSWORD = prompt("Ваш пароль")
//       if(!PASSWORD){
//         alert("Введите пароль")
//         continue;
//       } if (PASSWORD == upperCase + lowerCase + numbers){
//         isSuccess = true;
//       } else {
//         alert("eeee brat")
//       }
//   }while (!isSuccess);

//   alert ("welcome");
// 



// authorize()
