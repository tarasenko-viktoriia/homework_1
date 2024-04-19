// Arrow to Functions
// {
    // function answer() {
    //     let question;
    //     do {
    //         question = confirm("Ви втомились?");
    //     } while (!question);
    //     console.log("Так, я втомився.");
    // }
    // answer();
// }

// {
//     let arr = [];
//     function addToArray() {
//         let userInput = prompt("Введіть елемент масиву:");
//         if (userInput !== null) {
//             arr.push(userInput); 
//             addToArray(); 
//         }
//     }
//     addToArray();
//     console.log("Масив користувача:", arr);
// }
  
// {   
//     const arr = [];
//     let index = 0;
//     function addToArray() {
//         const answer = prompt("Введіть щось ");
//         if (answer) {
//             arr[index] = answer;
//             index++;
//             addToArray();
//         }
//     }  
//     addToArray();
//     console.log("Масив користувача:", arr);
// }

// {
//     function countIterations() {
//         let index = 0;
//         while (Math.random() <= 0.9) {
//             index++;
//         }
//         alert("Кількість ітерацій: " + index);
//     }
//     countIterations();
// }
const n = +prompt();
let sum = 0;
for (let i = 0; i <= n; i += 3) {
  sum += i;
  console.log(i);
}
// {
//     const step = 3;
//     function receiptAmount (n, step) {
  
//         const numOfTerms = Math.floor((n - 1) / step) + 1;
//         const sumOfTerms = numOfTerms * (2 + (numOfTerms - 1) * step) / 2;
//         return sumOfTerms;
//     }
//     const N = 10;
//     const result = receiptAmount(N, step);
//     console.log(`Сума арифметичної прогресії від 1 до ${N} з кроком ${step} :`, result); 
// }

// //progression sum
// const n = +prompt();
// let sum = 0;
// for (let i = 0; i <= n; i += 3) {
//   sum += i;
//   console.log(i);
// }

// createPerson
// {
//     function createPerson(name, surname) {
//       return {
//         name,
//         surname,
//         getFullName() {
//           let str = "";
//           Object.values(this).forEach((value) => {
//             if (typeof value !== "function") {
//               str += `${value} `;
//             }
//           });
//           return str;
//         },
//       };
//     }
  
//     const a = createPerson("Вася", "Пупкін");
//     const b = createPerson("Ганна", "Іванова");
//     const c = createPerson("Єлизавета", "Петрова");
  
//     console.log(a.getFullName());
//     a.fatherName = "Іванович";
//     console.log(a.getFullName()); 
  
//     console.log(b.getFullName());
//   }
// createPersonClosure
// const createPersonClosure = (name, surname) => {
//     let fatherName;
//     let age;
  
//     function checkText(char) {
//       return !!char.match(/[A-ZА-Я]/);
//     }
  
//     function getName() {
//       return name;
//     }
//     function getSurname() {
//       return surname;
//     }
//     function getFatherName() {
//       return fatherName;
//     }
//     function getAge() {
//       return age;
//     }
//     function getFullName() {
//       return `${surname} ${name} ${fatherName}`;
//     }
//     function setName(newName) {
//       if (checkText(newName[0])) {
//         name = newName;
//       }
//       return name;
//     }
//     function setSurname(newName) {
//       if (checkText(newName[0])) {
//         surname = newName;
//       }
//       return surname;
//     }
//     function setFatherName(newName) {
//       if (checkText(newName[0])) {
//         fatherName = newName;
//       }
//       return fatherName;
//     }
//     function setAge(newAge) {
//       if (newAge >= 0 && newAge <= 100) {
//         age = age;
//       }
//       return age;
//     }
//     function setFullName(newFullName) {
//       const [newSurname, newName, newFatherName] = newFullName.split(" ");
  
//       if (checkText(newSurname[0])) {
//         surname = newSurname;
//       }
//       if (checkText(newName[0])) {
//         name = newName;
//       }
//       if (checkText(newFatherName[0])) {
//         fatherName = newFatherName;
//       }
//       return getFullName();
//     }
  
//     return {
//       getName,
//       getSurname,
//       getFatherName,
//       getAge,
//       getFullName,
//       setName,
//       setSurname,
//       setFatherName,
//       setAge,
//       setFullName,
//     };
//   };
  
//   const a = createPersonClosure("Вася", "Пупкін");
//   const b = createPersonClosure("Ганна", "Іванова");
//   a.setName("Taras");
//   console.log(a.getName());
//   a.setAge(15);
//   a.setAge(150); 
  
//   b.setFullName("Петрова Ганна Миколаївна");
//   console.log(b.getFatherName()); 

// createPersonClosureDestruct

// isSorted
// const isSorted = (...numbers) => {
//   if (numbers.length < 2) {
//       return true;
//   }
//   for (let i = 1; i < numbers.length; i++) {
//       if (typeof numbers[i] !== 'number') {
//           return false; 
//       }
//       if (numbers[i] <= numbers[i - 1]) {
//           return false; 
//       }
//   }
//   return true;
// }

// console.log(isSorted(1, 2, 3, 4, 5)); 
// console.log(isSorted(5, 3, 2, 1)); 

// personForm (НЕ ПРАЦЮЄ!)
// function personForm(parent, person) {
//   // Створення поля введення для імені
//   const nameInput = document.createElement("input");
//   nameInput.type = "text";
//   nameInput.value = person.getName(); // Встановлення початкового значення з об'єкта person
//   nameInput.oninput = () => {
//       const newName = nameInput.value;
//       person.setName(newName); // Виклик функції setName з об'єкта person
//       nameInput.value = person.getName(); // Оновлення значення введення, щоб відображати коректне ім'я
//   };

//   // Створення поля введення для прізвища
//   const surnameInput = document.createElement("input");
//   surnameInput.type = "text";
//   surnameInput.value = person.getSurname(); // Встановлення початкового значення з об'єкта person
//   surnameInput.oninput = () => {
//       const newSurname = surnameInput.value;
//       person.setSurname(newSurname); // Виклик функції setSurname з об'єкта person
//       surnameInput.value = person.getSurname(); // Оновлення значення введення, щоб відображати коректне прізвище
//   };

//   // Створення поля введення для по батькові
//   const patronymicInput = document.createElement("input");
//   patronymicInput.type = "text";
//   patronymicInput.value = person.getPatronymic(); // Встановлення початкового значення з об'єкта person
//   patronymicInput.oninput = () => {
//       const newPatronymic = patronymicInput.value;
//       person.setPatronymic(newPatronymic); // Виклик функції setPatronymic з об'єкта person
//       patronymicInput.value = person.getPatronymic(); // Оновлення значення введення, щоб відображати коректне по батькові
//   };

//   // Створення поля введення для віку
//   const ageInput = document.createElement("input");
//   ageInput.type = "number";
//   ageInput.value = person.getAge(); // Встановлення початкового значення з об'єкта person
//   ageInput.oninput = () => {
//       let newAge = parseInt(ageInput.value);
//       if (isNaN(newAge)) {
//           newAge = 0; // Якщо введено некоректне значення, встановлюємо вік як 0
//       }
//       person.setAge(newAge); // Виклик функції setAge з об'єкта person
//       ageInput.value = person.getAge(); // Оновлення значення введення, щоб відображати коректний вік
//   };

//   // Створення поля введення для ПІБ
//   const fullNameInput = document.createElement("input");
//   fullNameInput.type = "text";
//   fullNameInput.value = person.getFullName(); // Встановлення початкового значення з об'єкта person
//   fullNameInput.oninput = () => {
//       const newFullName = fullNameInput.value;
//       person.setFullName(newFullName); // Виклик функції setFullName з об'єкта person
//       fullNameInput.value = person.getFullName(); // Оновлення значення введення, щоб відображати коректне ПІБ
//       // Окремо обробляємо зміну ПІБ для оновлення інших полів (ім'я, прізвище, по батькові)
//       const parts = newFullName.split(" ");
//       if (parts.length === 3) {
//           nameInput.value = parts[0];
//           surnameInput.value = parts[1];
//           patronymicInput.value = parts[2];
//       }
//   };

//   // Додавання створених полів введення до батьківського DOM-елементу
//   parent.appendChild(nameInput);
//   parent.appendChild(surnameInput);
//   parent.appendChild(patronymicInput);
//   parent.appendChild(ageInput);
//   parent.appendChild(fullNameInput);
// }

// // Приклад використання:
// const b = createPersonClosure("Ганна", "Іванова");
// b.setAge(15);
// b.setFullName("Петрова Ганна Миколаївна");

// const parentElement = document.getElementById("parentElementId"); // Замініть "parentElementId" на ідентифікатор вашого батьківського елементу
// personForm(parentElement, b);

// getSetForm
