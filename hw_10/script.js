//while confirm
// while (!confirm("Ви втомились?")) {};

//array fill
// {
//     let arr= [];
//     let prompt;
//     while ((prompt = prompt("Введіть щось "))) {
//     arr.push(prompt);
//     console.log(arr);
//     }
// }

//array fill nopush
// const arr = [];
// let index = 0;
// while (true) {
//   const answer = prompt("Введіть щось ");
//   if (answer) {
//     arr[index] = answer;
//     index++;
//   } else {
//     break;
//   }
// }
// console.log(arr);

//infinite probability
// let index = 0;
// while (true) {
//     const num = Math.random();
//     if (num > 0.9) {
//       break;
//     }
//     index++
// }
// console.log(`Кількість ітерацій: ${index}`)

//empty loop
// while (!prompt()) {};

//progression sum
const n = +prompt();
let sum = 0;
for (let i = 0; i <= n; i += 3) {
  sum += i;
  console.log(i);
}
//chess one line
//numbers
//chess
//cubes
//multiply table
//read array of objects
//Ромбік
//DOM: multiply table
//DOM: highlight cell
//DOM: Highlight cross