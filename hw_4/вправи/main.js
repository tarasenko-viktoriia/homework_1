// // //Задачки на приведення до типів
console.log("3" + 2); //32
console.log("3" + true); //3true
console.log("3" + undefined);//3undefined
console.log("3" + null); //3null
console.log(35 * "hello"); //Nan
console.log(5 + null); //5
console.log("5" + null); //5null  
console.log("5" - 2); //3
console.log("5" * "2"); //10
console.log(20 + "abc"); //20abc
console.log("10" * "10"); //100
console.log(2 - "x" + "10abc");//NaN10abc
console.log(3 + "2");//32
console.log("10" / "2");//5
console.log(1 + true);//2
console.log(1 + false);//1
console.log(1 + undefined);//Nan
console.log(true + null);//1
console.log(true + undefined);//Nan
console.log(23 - true);//22
console.log(true - null);//1
console.log(false + undefined);//Nan
console.log("25" + 56);//2556
console.log("25" + null);//25null
console.log("10" + undefined);//10undefined
console.log("abc" + undefined);//abcundefined
console.log("25" + false);//25false

// //Задачки на логічне і
console.log(11 && 22);//22
console.log(0 && 22);//0
console.log(22 && null);//null
console.log(null && undefined);//null
console.log(null && undefined && true);//null
console.log(11 && 22 && false);//false
console.log("-15" && -22 && "sdsd" && null + 1 && "null1");//null1

// //Задачки на логічне або
console.log(11 || 22);//11
console.log(0 || 22);//22
console.log(22 || null);//22
console.log(null || undefined);//undefined
console.log(null || undefined || true);//true
console.log(11 || 22 || false);//11

// //Задачки на логічне і та або
console.log(1 || (22 && !false) || 17);//1
console.log((1 && 22) || false || 17);//22
console.log(true || false || (undefined && null) || "abc");//true

// //Задачки на логічне і та або + тринарний оператор
let condition1 = true ? 11 - 22 <= 0 && "abc" : "232" - 1 + "abc";
console.log(condition1);//abc

let condition2 = undefined || (null && 27) || (14 && "") ? ("" && "abc") || 0 : 0 || undefined || condition1;
console.log(condition2);//abc
