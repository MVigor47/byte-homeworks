
// ЗАДАНИЕ №2


// function randomGenerator(start, finish) {
//     return Math.round(Math.random() * (start - finish ))+finish;
//   }

//   const result = randomGenerator (2,5)
//   console.log(`result`, result)



// ЗАДАНИЕ №1

const  passwordEnter = () =>{
  let userPassword
  let isSuccess = false

  do {
  userPassword = prompt("Введите пароль");
  const passLength = 6;
  if(userPassword.length < passLength){
    alert('Меньше чем 6 символов')
    continue
  }
  if (userPassword === userPassword.toUpperCase()) {
   alert ('Введите нижний регистр');
  }
  if (userPassword === userPassword.toLowerCase()){
   alert ('Введите верхний регистр');
  }else{
    alert('Пароль подходит')
    isSuccess=true;
  }
} while(!isSuccess)
}

const upperLower = function(){
  const name = prompt("Name")
  let newName ="", newChar ="";
  for (let i=0; i < name.length; i++) {
    if (name.charAt(i) === " ") {
      newChar = " "
    } else if (name.charAt(i) === name.charAt(i).toUpperCase()) {
      newChar = name.charAt(i).toLowerCase()
    } else {
      newChar = name.charAt(i).toUpperCase()
    }
   newName += newChar;
  }

  return newName;
}

const lowerUpper = function(){
  const surName = prompt("SurName")
  let newSurName ="", newChar ="";
  for (let i=0; i < surName.length; i++) {
    if (surName.charAt(i) === " ") {
      newChar = " "
    } else if (surName.charAt(i) === surName.charAt(i).toUpperCase()) {
      newChar = surName.charAt(i).toLowerCase()
    } else {
      newChar = surName.charAt(i).toUpperCase()
    }
   newSurName += newChar;
  }

  return newSurName;
}



passwordEnter()

alert(`${upperLower()} ${lowerUpper()}`)










// function ucFirst() {
//   const name = prompt("Name")
//   if (!name){
//     alert("enter name")
//   }
//   return name[0].toUpperCase() + name.slice(1).toLowerCase;
// }


// alert(ucFirst())