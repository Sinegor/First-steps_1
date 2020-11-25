// "use strict"
// // Объект
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "Den":  3455
//   };
// function topSalary (obj){
//     let topSalary = 0;
//     // let nameOftopSalaty;
//     for (let [name, salary] of Object.entries(obj) ){
//         //    console.log ([nameOftopSalaty]);
//             if (salary>topSalary){
//                 topSalary=salary;
//                 nameOftopSalaty = name;
//             };
       
// };
//     return [nameOftopSalaty, topSalary];
// };
// console.log(`${topSalary(salaries)[0]}: ${topSalary(salaries)[1]}`);
// Время:
// 1
// let date = new Date(2012,1,20,3,12)
// alert (date)
//
// 2
// function getWeekDay(date){
// let daysOfweek = ["SUN", "MON", "TUES", "WEN", "THUR", "FRI", "SAT"];
// return daysOfweek[date.getDay()];
// };
// date_1 = new Date (2020,6,7)
// console.log(getWeekDay(date_1));

// 3
// function getLocalDay (date){
//     let day = date.getDay()
//     if (day == 0){
//         return 7
//     } else{
//         return day
//     }
// };
// date_1 = new Date (2020,6,5)
// console.log(getLocalDay(date_1));

// 4
// function getDateAgo(date, days) {
//     let time = date.getTime() - (+days)*86400*1000
//     return new Date(time)
// };
// let date_1 = new Date(2015, 0, 2)
// alert (getDateAgo(date_1, 365))

// 5
// function getLastDayOfMonth(year, month){
//     let day = 28; 
//     let date_1;
//     while (true){
//             date_1 =  new Date (year, month, day)
//             let month_1= date_1.getMonth()
//             if (month!=month_1){
//                 break;
//             }
//             day+=1;
//             }
//     return day-1;
// }
// console.log (getLastDayOfMonth(2043, 1));

// 6
// function getSecondtoDay(){
//     let date = new Date()
//     return date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
// }
// console.log (getSecondtoDay())

// 7
function getSecondsToTomorrow(){
    let now = new Date();
    return 24*3600 - now.getHours()*3600+now.getMinutes()*60 +now.getSeconds();
}
alert (getSecondsToTomorrow())