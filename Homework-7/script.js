// const salaries = {
//     John: "4300.00",
//     Ann: "5700.40",
//     Pete: "4900.95",
//   };
  
//   const getSalariesTotal = (salaries) => {
//     let total = 0;
//     for (let employee in salaries) {
//       total += Number(salaries[employee]);
//         console.log(`employee`, employee);
//         console.log(`salaries[empleyee]`, salaries[employee])
//     }
  
//     return total;
//   };
  
  
//   const totalResult = getSalariesTotal(salaries);
//   console.log(`totalResult`, totalResult)



/////////////////////////////////////////////////////

function timetable(){
  

  const timeTable = {
  };
  console.log(`timeTable`, timeTable)
  for (;;) {
  const time = prompt("Time")
  if(time==null){
    return
  }
  const action = prompt("Action")
  if(action==null){
    return
  }
  timeTable[time] = action;
}

}
timetable()


