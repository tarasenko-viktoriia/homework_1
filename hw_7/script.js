// Temperature
    // const f = (degreesCelsius) => {
    //     const degreesFahrenheit = ((degreesCelsius * 9 / 5) + 32);
    //     return degreesFahrenheit;
    // }
// RGB
// {
//     function formatColor(r, g, b) {
//         const toHex = (c) => {
//             const hex = c.toString(16);
//             return hex.length === 1 ? '0' + hex : hex;
//         };
    
//         const rr = toHex(r);
//         const gg = toHex(g);
//         const bb = toHex(b);
    
//         return `#${rr}${gg}${bb}`;
//     }
// }
// Flats
// {
//     const flats = (result) => {

//         const floor = parseInt(prompt("Enter the number of floors in the building"));
//         const apartmentQuantity = parseInt(prompt("Enter the number of apartments in the building"));
//         const apartmentNumber = parseInt(prompt("Enter the number of the desired apartment"));
        
//         const apartmentQuantityFloor = floor * apartmentQuantity;
//         const entrance = Math.ceil(apartmentNumber / apartmentQuantityFloor);
//         const floorNumber = Math.ceil((apartmentNumber % apartmentQuantityFloor) / apartmentQuantity);

//         return { entrance, floor: floorNumber };
//     }
//     console.log(flats())
// }
// Credentials

// {
//     const capitalize = (word) => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }
    
//     const userInfo = () => {
//         let name = prompt("Будь ласка, введіть ваше ім'я:").trim().toLowerCase();
//         let surname = prompt("Будь ласка, введіть ваше прізвище:").trim().toLowerCase();
//         let fatherName = prompt("Будь ласка, введіть ваше по-батькові:").trim().toLowerCase();
    
//         name = capitalize(name);
//         surname = capitalize(surname);
//         fatherName = capitalize(fatherName);
    
//         const fullName = name + ' ' + surname + ' ' + fatherName;
    
//         return { name, surname, fatherName, fullName };
//     }
    
//     const user = userInfo();
//     console.log(user);
    
// }
// New line
// {
//     const newLine = (input) => {
//         return input.split('\\n').join('\n');
//     };
//     let userInput = prompt("Введіть рядок з \\n як маркером нового рядка:");
//     let result = newLine(userInput);
//     console.log(result);
    
// }

// Prompt OR
// {
//     const getAge = (promptText, defaultValue = 'я безсмертний') => +prompt(promptText) || defaultValue;
//     const promptText = "Введіть ваш вік";
//     const age = getAge(promptText);
//     console.log(age);
// }
// Login And Password
// {
//     const loginAndPassword = (correctlogin, correctpassword) => {
//         const login = prompt("Введіть ваш логін");
//         if (login === correctlogin) {
//             const password = prompt("Введіть ваш пароль");
//             if (password === correctpassword) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }
    
//     const correctlogin = "admin";
//     const correctpassword = "qwerty";
//     const result = loginAndPassword(correctlogin, correctpassword);
//     console.log(result);
// }
// For Table
// Filter Lexics
// Currency Table
// Form
// Array of objects sort
// {
//     function sort(array, key, ascending = true) {
//         return array.sort((a, b) => {
//             const valueA = a[key];
//             const valueB = b[key];
            
//             if (typeof valueA === 'string' && typeof valueB === 'string') {
//                 if (ascending) {
//                     return valueA.localeCompare(valueB);
//                 } else {
//                     return valueB.localeCompare(valueA);
//                 }
//             } else if (typeof valueA === 'number' && typeof valueB === 'number') {
//                 if (ascending) {
//                     return valueA - valueB;
//                 } else {
//                     return valueB - valueA;
//                 }
//             } else {
//                 return 0;
//             }
//         });
//     }
    
//     const persons = [
//         {name: "Іван", age: 17},
//         {name: "Марія", age: 35},
//         {name: "Олексій", age: 73},
//         {name: "Яків", age: 12},
//     ];
    
//     sort(persons, "age"); // сортує за віком за зростанням
//     sort(persons, "name", false); // сортує на ім'я за спаданням
    
// }
// Table
// Divide

// Calc Func
// function calculateMonthlySalary(rate, numberDaysMonth, daysWorked) {
//     let monthlySalary = rate / numberDaysMonth * daysWorked;
//     monthlySalary = parseFloat(monthlySalary.toFixed(2)); // Перетворюємо результат в число з плаваючою комою з двома десятковими знаками
//     return monthlySalary;
// }

// const rate = +prompt("Enter your monthly rate"); // Вводиться сума місячної ставки заробітної плати
// let numberDaysMonth = +prompt("Enter the number of days in this month (not more than 31)"); // вводиться кількість днів в місяці
// numberDaysMonth = Math.min(numberDaysMonth, 31); // обмежується кількість днів до 31

// let daysWorked = +prompt("Enter the number of days worked this month (not more than 31)"); // вводиться кількість відпрацьованих днів у місяці
// daysWorked = Math.min(daysWorked, 31); // обмежується кількість днів до 31

// const monthlySalary = calculateMonthlySalary(rate, numberDaysMonth, daysWorked);
// alert("Your monthly salary is: " + monthlySalary);

// Calc Live