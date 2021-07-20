

// var secretNumber = 42,
// youWon = false,
// i = 0;

// while (i < 3) {
// var playerGuess = prompt("What is your guess?");

// if (playerGuess == secretNumber){
// youWon = true;
// break;
// }

// i++;
// }

// if (youWon) {
// alert("You got it!");
// } else {
// alert("Sorry, you have no more tries left.");
// }
const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";


const autorithe = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;
    let attempts = 3;
        do{
            userLogin = prompt("Ваш логин:")
            if(!userLogin){
                alert("Логин не верний")
                continue;
            }

            userPassword = prompt("Ваш пароль:")
            if(!userPassword){
                alert("Пароль не верний")
                continue;
            }

            if (userPassword === PASSWORD || userLogin === LOGIN){
                isAuthSuccess = true;
            }else{
                attempts --
                alert(`У вас осталось ${attempts} попыток`)
            }
        } while ( attempts > 0 && !isAuthSuccess)

        if(attempts==0){
            alert("See ya ^^")
        }else{
            alert("Welcome")
        }
    }

autorithe()



    {
        let i = attempts
        while (i>0){
            alert(`У вас осталось попыток: ${i}`)
            i--;
            }
    }







// const getNumber = (start,end)=>{

//     for(let i = start; i<=end; i++){
//     if(i>1){
//         for(let j = i; j>1; j--){
//         if(i%j == 0 && j!=i){
//         break;
//             }else if(j==2){
//             console.log(i);
//                 } 
                                                         
//             }           
//         }
//     }
// }

// getNumber(50, 200)