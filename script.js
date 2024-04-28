// fetch basic

// fetch improved

// race

// Promisify: confirm
// function confirmPromise(text) {
//   return new Promise((resolve, reject) => {
//     const result = confirm(text);
//     if (result) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// confirmPromise("Проміси це складно?")
//   .then(() => console.log("не так вже й складно"))
//   .catch(() => console.log("respect за посидючість і уважність"));

// Promisify: prompt
// function promptPromise(text) {
//   return new Promise((resolve, reject) => {
//     const userInput = prompt(text);
//     if (userInput !== null) {
//       resolve(userInput);
//     } else {
//       reject();
//     }
//   });
// }

// promptPromise("Як тебе звуть?")
//   .then((name) => console.log(`Тебе звуть ${name}`))
//   .catch(() => console.log("Ну навіщо морозитися, нормально ж"));

// Promisify: LoginForm
