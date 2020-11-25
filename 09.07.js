// JSON
// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };
// room.occupiedBy = meetup;
// meetup.self = meetup;
// let result_json = JSON.stringify (meetup, function check_meetup(key, value){
//                                 return (key!=""&&value==meetup)? undefined: value;                   
// });
// console.log (result_json);

function sum (){
    console.log (45+45)
}
// setTimeout (sum, 2000)
let timerId = setTimeout (sum, 1000)
