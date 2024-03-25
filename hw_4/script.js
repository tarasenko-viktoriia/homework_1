//Number: odd
// {
//     const userNumber = (prompt("Введіть будь-яке число"));
//     if (!isNaN(userNumber)) {
//         const number = parseFloat(userNumber);
        
//         if (number % 2 === 0) {
//             alert("Введене число є парним.");
//         } else {
//             alert("Введене число є непарним.");
//         }
//     } else {
//         alert("Введено нечислове значення.");
//     }
// }

//String: lexics (ДОРОБИТИ!!!!!!!!!!!!!)

// // Запит тексту у користувача
// const text = prompt("Будь ласка, введіть текст:");

// // Некоректні слова, які ми будемо перевіряти
// const badWords = ["некоректне_слово1", "некоректне_слово2", "некоректне_слово3"];

// // Перевірка на наявність некоректних слів у тексті
// let foundBadWords = [];
// for (let word of badWords) {
//     if (text.toLowerCase().includes(word.toLowerCase())) {
//         foundBadWords.push(word);
//     }
// }
// // Виведення результату перевірки
// if (foundBadWords.length === 0) {
//     console.log("Текст не містить некоректних слів.");
// } else {
//     console.log("Текст містить некоректні слова:", foundBadWords.join(", "));
// }

//Boolean
// {
//     const firstQuestion = confirm("Ви жінка?");
//     const secondQuestion = confirm("Вам більше 18 років?");
    
//     console.log("Ви жінка?", firstQuestion ? "Так" : "Ні");
//     console.log("Вам більше 18 років?", secondQuestion ? "Так" : "Ні");
// }

//Boolean: if
// {
//     const firstQuestion = confirm("Ви жінка?");
//     const secondQuestion = confirm("Вам є вже 18?");
//     if (firstQuestion === true) {
//         alert("Ви жінка.");
//         } else {
//         alert("Ви чоловік.");
//         }
//     if (secondQuestion === true) {
//         alert("Ви повнолітні.");
//         } else {
//         alert("Ви неповнолітні.");
//         }
// }

//Comparison: sizes
// alert("Ми допоможемо перевести ваш розмір в систему розмірів Великобританії.")
// const sizeUa = parseInt(prompt ("Введіть ваш розмір в українській системі розмірів (від 40 до 56)"));
// if (sizeUa === 40) {
//     alert("Ваш великобританський розмір: 8.")
// } else if (sizeUa === 42) {
//     alert("Ваш великобританський розмір: 10.")
// } else if (sizeUa === 44) {
//     alert("Ваш великобританський розмір: 12.")
// } else if (sizeUa === 46) {
//     alert("Ваш великобританський розмір: 14.")
// } else if (sizeUa === 48) {
//     alert("Ваш великобританський розмір: 16.")
// } else if (sizeUa === 50) {
//     alert("Ваш великобританський розмір: 18.")
// } else if (sizeUa === 52) {
//     alert("Ваш великобританський розмір: 20.")
// } else if (sizeUa === 54) {
//     alert("Ваш великобританський розмір: 22.")
// } else if (sizeUa === 56) {
//     alert("Ваш великобританський розмір: 24.")
// } else {
//     alert("Розмір не знайдено:(")
// }

// Ternary
// {
//     const question = confirm("Ви жінка?");
//     question === true ? alert("Ви жінка.") : alert("Ви чоловік.");
// }

//Training

// // bool type cast
// !!2//true
// !!0//false
// !!1//true
// // or
// 2 || 1 //2
// 2 || 0 //2
// //and
// 2 && 1//1
// 1 && 2//2
// 0 && 2//0
// // or and and difference
// 0 || 1 || 2 //1
// 0 && 1 && 2//0
// 2 || 1 || 0//2
// 2 && 1 && 0//0
// confirm('left') || confirm('right')//якщо в confirm('left') користувач натисне ОК(true), то далі на confirm('right') не пропусте.
// confirm('left') && confirm('right')//навіть якщо в confirm('left') користувач натисне ОК(true), то далі на confirm('right') пропусте.
// //null, undefined, so on
// null || 2 //2
// undefined && 1 //undefined 
// alert("Hello") && confirm('Are you sexy?');//undefined до confirm('Are you sexy?') не переходить
// alert("Hello") || confirm('Are you drunk?');//переходить до confirm('Are you sexy?'), далі в залежності від відповіді true або false
// //brackets and complex expressions
// (undefined || 2) && (3 || 0)// 3
// (2 && 1) || (null && 0)//1
// (2 > 1) && "greater"//"greater"
// (2 < 1) && null//false
// null && (2 < 1)//null
// // ternary operator
// 1 ? "one" : "not one" //"one"
// 0 ? "zero" : "not zero"//"not zero"
// "0" ? "\"zero\"" : "not `zero`"//'"zero"'
// parseInt("0") ? 'true' : 'false'//'false'
// ("" || 2) && (3 || "3.5") || (4 && 5)//3
// (-1 + 1) && "zero"//0
// "-1" + 1 && "oups"//"oups"
// (typeof null === 'object') ? "null is object" : "null is null"//"null is object"
// // ternary && ||
// Math.random() < 0.5 && 'less' || 'more'//Якщо Math.random() < 0.5 є true, вираз поверне "less". Якщо він є false, вираз поверне "more".
// (a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a//'less: '+ a, якщо a менше 0.5, або 'more: '+a, якщо a більше або дорівнює 0.5.
// //in for array
// [2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found'//'prime'

//Prompt: or 
// {
//     let age;
//     do {
//         age = prompt("Введіть ваш вік") || alert("Помилка! Введіть вік повторно.");
//     } while (!age);
// }

//Confirm: or this days

// const shoppingRobot = confirm("Шопінг?") || alert("Ти - бяка!");

//Confirm: if this days

// const shopping = confirm("Шопінг?")
// if (shopping === false) {
//     alert("Ти - бяка!");
//     }

//Default: or 
// {
//     const lastName = prompt("Введіть ваше прізвище.") || "Іванов";
//     const firstName = prompt("Введіть ваше ім'я.") || "Іван";
//     const patronymicName = prompt("Введіть ваше по-батькові.") || "Іванович";

//     const fullNameArray = [lastName, firstName, patronymicName];
//     const fullName = fullNameArray.join(" ");
//     alert(`Ваше ПІБ: ${fullName}.`);
// }

//Default: if

// {
//     const lastName = prompt("Введіть ваше прізвище.");
//     const firstName = prompt("Введіть ваше ім'я.");
//     const patronymicName = prompt("Введіть ваше по-батькові.");
    
//     if (lastName === "") {
//         alert("Ваше прізвище Іванов.")
//     } else {
//         alert (`Ваше прізвище ${lastName}.`)
//     }
//     if (firstName === "") {
//         alert("Ваше ім'я Іван.")
//     } else {
//         alert (`Ваше прізвище ${firstName}.`)
//     }
//     if (patronymicName === "") {
//         alert("Ваше по-батькові Іванович.")
//     } else {
//         alert (`Ваше прізвище ${patronymicName}.`)
//     }
// }

//Login and password

//Currency exchange

//Scissors

// const userInput = prompt("Давайте зіграємо в гру \"Камінь-ножиці-папір\"? Ваш хід:");
// let computerInput = Math.random();
// let computerChoice;
// if (computerInput < 0.33) {
//     computerChoice = "Камінь";
// } else if (computerInput < 0.67) {
//     computerChoice = "Ножиці";
// } else {
//     computerChoice = "Папір";
// }
// alert(`Мій хід: ${computerChoice}`);

// let result = "";
// if (userInput.toLowerCase() === computerChoice.toLowerCase()) {
//     result = "Нічия!";
// } else if (userInput.toLowerCase() === "камінь") {
//     if (computerChoice === "Ножиці") {
//         result = "Ви перемогли!";
//     } else {
//         result = "Я переміг!";
//     }
// } else if (userInput.toLowerCase() === "ножиці") {
//     if (computerChoice === "Папір") {
//         result = "Ви перемогли!";
//     } else { result = "Я переміг!";
//         }
//     } else if (userInput.toLowerCase() === "папір") {
//         if (computerChoice === "камінь") {
//             result = "Ви перемогли!";
//         } else {
//             result = "Я переміг!";
//         }
//     } else {
//         result = "Ви неправильно ввели хід!";
//     }
//     alert(result);

//Додаткове завдання

//Завдання на чорний пояс