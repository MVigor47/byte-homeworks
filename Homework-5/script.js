
const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const autorithe = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;



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
                let i = 3
                while (i){
                    alert(`У вас осталось попыток: ${i}`)
                    i--;
                    if(i--){
                        break;
                    }
                }
            }
        } while (!isAuthSuccess)

        alert("Welcome")
    }

autorithe()









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