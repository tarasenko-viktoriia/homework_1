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

// const size = 20;
// switch (size) {
//   case 6:
//     alert("s");
//     break;
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//     alert("m");
//     break;
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//     alert("l");
//     break;
//   case 16:
//   case 17:
//   case 18:
//   case 19:
//     alert("xl");
//     break;
//   case 20:
//     alert("xxl");
//     break;
//   default:
//     alert("no size");
// }

// switch (true) {
//   case size === 6:
//     alert("s");
//     break;
//   case size >= 8 && size <= 11:
//     alert("m");
//     break;
//   case size >= 12 && size <= 15:
//     alert("l");
//     break;
//   case size >= 16 && size <= 19:
//     alert("xl");
//     break;
//   case size === 20:
//     alert("xxl");
//     break;
//   default:
//     alert("no size");
// }

const color = prompt("Введіть колір", "");

if (color) {
  if (color === "red" || color === "black") {
    document.write("<div style='background-color: red;'>червоний</div>");
    document.write(
      "<div style='background-color: black; color: white;'>чорний</div>"
    );
  } else if (color === "blue" || color === "green") {
    document.write("<div style='background-color: blue;'>синій</div>");
    document.write("<div style='background-color: green;'>зелений</div>");
  } else {
    document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
  }
}