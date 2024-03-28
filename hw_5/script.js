//Confirms
// {
//     let answers = [];

//     let answer1 = confirm("Ви чоловік?");
//     answers.push(answer1);
//     let answer2 = confirm("Вам є 18 років?");
//     answers.push(answer2);
    
//     console.log(answers)
// }
//Prompts
// {
//     let answers = [];

//     answers[0] = prompt("Введіть ваше ім'я.");
//     answers[1] = prompt("Введіть ваш вік");
//     answers[2] = prompt("З якого ви міста?");
    
//     console.log(answers);
// }

//Item access
// {
//     let answers = [];

//     answers[0] = prompt("Введіть ваше ім'я.");
//     answers[1] = prompt("Введіть ваш вік");
//     answers[2] = prompt("З якого ви міста?");
    
//     let index = prompt("Введіть індекс у масиві (від 0 до 2):");
//     index = parseInt(index);
//     if (!isNaN(index) && index >= 0 && index < answers.length) {
//         alert(`Значення елемента за введеним індексом: ${answers[index]}` );
//     } else {
//         alert("Введено некоректний індекс.");
//     }
// }

//Item change (доробити-зробити так, щоб можна було вводити декілька знчень)

// {
//     let arr = [];

//     let index = parseInt(prompt("Введіть номер індексу в масиві."));
//     let indexValues = prompt ("Тепер введіть значення для цього індексу.")

//     arr[index]=indexValues;

//     console.log(arr);
// }

//Multiply table
// const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];

// console.log(multiplyTable);

//Multiply table slice

// const multiplicationTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];
// const multiplicationTableWithoutZeros = multiplicationTable.slice(1).map(row => row.slice(1));
// console.log(multiplicationTableWithoutZeros);

//IndexOf Word (ДОРОБИТИ - вказує не слово, а букву)
// {
//     let arr = [];

//     const text = prompt('Введіть рядок із декількох слів.');
//     const itemText = prompt('Введіть будь-яке слово із цього рядка.');
//     arr.push(text); // не треба може бути
//     arr = text.split(' ');
    
//     if (text.indexOf(itemText) === -1) {
//         alert('Такого слова у вказаному рядку не виявлено.');
//     } else {
//         alert(`Ваше слово за рахунком в рядку: ${text.indexOf(itemText)+1}`);
//     }
// }

//Reverse (ДОРОБИТИ- відображає тільки останій елемент, а не весь масив)

// {
//     let arr = [];
//     let text = prompt('Введіть рядок із 5 елементів');
//     arr = text.split('');
//     let arrReverse = [];
//     arrReverse.push(arr.pop());
//     console.log("Масив у зворотньому порядку:", arrReverse);
// }

//Reverse 2

//Copy

// const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];

// const arr=[...multiplyTable];
// console.log(arr);

//Deep Copy

// const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];

// const copiedMultiplyTable = multiplyTable.map(innerArray => innerArray.slice());
// console.log(copiedMultiplyTable);

//Array Equals (Не знаю чи правильно)

// const arr1 = [1, 2, 3];
// const arr2=arr1;

//Flat
// const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16]
// ];
// const arr=[].concat(...multiplyTable);
// console.log(arr);

//Destruct
// {
//     const text = prompt('Введіть будь-яке речення.');
//     const arr = [...text];
//     const [firstLetter, , , , fifthLetter, , , , ninthLetter] = arr;
    
//     console.log("Перша літера:", firstLetter);
//     console.log("П'ята літера:", fifthLetter);
//     console.log("Дев'ята літера:", ninthLetter);
// }

//Destruct default
// {
//     const text = prompt('Введіть будь-яке речення.');
//     const arr = [...text];
//     let [, secondLetter = '!', , fourthLetter = '!', fifthLetter = '!', , , ,] = arr;
    
//     console.log("Перша літера:", secondLetter);
//     console.log("П'ята літера:", fourthLetter);
//     console.log("Дев'ята літера:", fifthLetter);
// }


//Multiply table rest

//For Alert

// const names = ["John", "Paul", "George", "Ringo"];
// for (const name of names){
//     alert(`${name}`)
// }

//For Select Option
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<select>"
    for (const currency of currencies){
        str += "<option>" + currency + "</option>";
    }
    str+= "</select>"
    document.write(str) 
}

//For Table Horizontal
{
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table border='1'>";
    for (const name of names){
        str += "<td>" + name + "</td>";
    }
    str += "</table>";
    document.write(str);
}

//For Table Vertical

{
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table border='1'>";
    for (const name of names){
        str += "<tr><td>" + name + "</td></tr>";
    }
    str += "</table>";
    document.write(str);
}

//For Table Letters (НЕ ПРАЦЮЄ)
{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<table>";

let counter = 0;
for (const currency of currencies) {
    if (counter % 3 === 0) {
        str += "<tr>";
    }
    str += "<td>";
    for (const letter of currency) {
        str += letter;
    }
    str += "</td>";
    counter++;
    if (counter % 3 === 0) {
        str += "</tr>";
    }
}
str += "</table>";
document.write(str);

}

//For Multiply Table

//Function Capitalize

//Map Capitalize

//Filter Lexics

//Beep Lexics

//Reduce HTML

//For Brackets Hell Check