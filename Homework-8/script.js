// Задание 1

// const booleanArr = (arr) => {
//     let numsOfTrue = 0;
//     for (let boolean of arr){
//         console.log(`boolean`, boolean)
//         if(boolean === true){
//             numsOfTrue ++
//         }
//     }
//     return numsOfTrue;
// }

// const result = booleanArr([true, false, false, true, false]);
// console.log(`result`, result)


// Задание 2 


// const getOccurrencesCount = (arr) => {
//     const object = { };
//     for (let i = 0, j = arr.length; i < j; i++) {
//         object[arr[i]] = (object[arr[i]] || 0) + 1;
//         console.log(`arr[i]`, arr[i])
//     }    
//     console.log(`object`, object)   
// }

// getOccurrencesCount([
//     "apples",
//     "oranges",
//     "pears",
//     "pears",
//     "apples",
//     "oranges",
//     "oranges",
//     "pears",
//   ]);

// Задание 3


function findExcess(arr){
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) 
    {
        if ((arr[i] % 2) === 0) 
        {
            even.push(arr[i]);
            console.log(`even[i]`, arr[i])
        } 
        else 
        {
            odd.push(arr[i]);
            console.log(`odd[i]`,arr[i] )
        }
    }
    let evenLength = even.length;
    console.log(`evenLength`, evenLength)
    let oddLength = odd.length;
    console.log(`oddLength`, oddLength)
 
    if (evenLength > oddLength)
    {
        return odd[0];
    } 
    else 
    {
        return even[0];
    }
 }

result = findExcess([2, 6, 8, 10, 3]); // -> 3
console.log(`result`, result)





