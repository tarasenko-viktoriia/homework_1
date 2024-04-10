//blocks
let a = 10;
{
  let b = 20;
  {
    let c = 30;
    //a=100, b=21, c=30, d-is not defined
    b++;
    a *= 10;
  }
  {
    let c = 50;
    //a=100, b=521, c=50, d-is not defined
    b += 500;
  }
  {
    const a = 100500;
    const d = "value";
    //a=100500, b=521, c=is not defined, d-value
    {
      let a = -50;
      b = 1000;
      //a=-50, b=1000, c=is not defined, d-value
    }
    //a=100500, b=1000, c=is not defined, d-value
  }
  //a=100, b=1000, c=is not defined, d-is not define
}
//a=100, b-is not define, c-is not define, d-is not define

//comparison if
// const age = +prompt("Скільки вам років?", "");
// if (age < 0) {
//   alert("негативний вік");
// } else if (age < 18) {
//   alert("школяр");
// } else if (age > 18 && age < 30) {
//   alert("молодь");
// } else if (age > 30 && age < 45) {
//   alert("зрілість");
// } else if (age > 45 && age < 60) {
//   alert("захід сонця");
// } else if (age > 60) {
//   alert("як пенсія?");
// } else {
//   alert("чи кіборг, чи KERNESS");
// }

//switch: sizes
// const size = +prompt("Введыть ваш розмір від 40 до 54");
// switch (size) {
//     case 40:
//         alert("8");
//         break;
//     case 42:
//         alert("10");
//         break;
//     case 44:
//         alert("12");
//         break;
//     case 46:
//         alert("14");
//         break;
//     case 48:
//         alert("16");
//         break;
//     case 50:
//         alert("18");
//         break;
//     case 52:
//         alert("20");
//         break;
//     case 54:
//         alert("22");
//         break;
//     default:
//         alert("no size");
// }

//switch: if
// const color = prompt("Введіть колір", "");
// if (color) {
//   if (color === "red" || color === "black") {
//     document.write("<div style='background-color: red;'>червоний</div>");
//     document.write("<div style='background-color: black; color: white;'>чорний</div>");
//   } else if (color === "blue" || color === "green") {
//     document.write("<div style='background-color: blue;'>синій</div>");
//     document.write("<div style='background-color: green;'>зелений</div>");
//   } else {
//     document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
//   }
// }

//noswitch
// const noSwitch = (key, cases, defaultKey='default') => {
//     if (key in cases && typeof cases[key] === 'function') {
//         return cases[key]();
//     } else if (defaultKey in cases && typeof cases[defaultKey] === 'function') {
//         return cases[defaultKey]();
//     }
// }
// // Умова key in cases перевіряє, чи існує ключ key у об'єкті cases. Наприклад, якщо key дорівнює "воду", то перевірка key in cases поверне true, оскільки в об'єкті cases є ключ "воду".
// // Умова typeof cases[key] === 'function' перевіряє, чи значення, яке пов'язане з ключем key, є функцією. Якщо це так, то ця умова поверне true.

// // Умова defaultKey in cases перевіряє наявність ключа defaultKey у об'єкті cases. 
// // Якщо цей ключ існує у cases, та значення за ним є функцією, то викликається ця функція. Це забезпечує можливість виконання певних дій, якщо введений ключ не відповідає жодному з передбачених варіантів.
// const drink = prompt("Що ви любите пити")
// noSwitch(drink, {
//     воду: () => console.log('Найздоровіший вибір!'),
//     чай(){
//         console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
//     },
//     "пиво": () => console.log('Добре влітку, та в міру'),
//     віскі: function(){
//         console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
//     },
//     default(){
//         console.log('шото я не зрозумів')
//     }
// })
//closure calc

fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {

            console.log(data) 
        })

//closure calc 2

//countries and cities