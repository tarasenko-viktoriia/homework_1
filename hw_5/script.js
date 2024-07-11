//Confirms
{
    const answers = [confirm("Ви чоловік?"), confirm("Вам є 18 років?")];
    console.log(answers)
}

//Prompts
{
    const answers = [];

    answers[0] = prompt("Введіть ваше ім'я.");
    answers[1] = prompt("Введіть ваш вік");
    answers[2] = prompt("З якого ви міста?");
    
    console.log(answers);
}

//Item access
{
    const answers = [];

    answers[0] = prompt("Введіть ваше ім'я.");
    answers[1] = prompt("Введіть ваш вік");
    answers[2] = prompt("З якого ви міста?");
    
    const index = prompt("Введіть індекс у масиві (від 0 до 2):");
    index = parseInt(index);
    if (!isNaN(index) && index >= 0 && index < answers.length) {
        alert(`Значення елемента за введеним індексом: ${answers[index]}` );
    } else {
        alert("Введено некоректний індекс.");
    }
}

//Item change 
{
    const arr = [];

    const index = parseInt(prompt("Введіть номер індексу в масиві."));
    const indexValues = prompt ("Тепер введіть значення для цього індексу.")

    arr[index]=indexValues;

    console.log(arr);
}

//Multiply table
{
    const multiplyTable = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    
    console.log(multiplyTable);    
}

//Multiply table slice
{
    const multiplicationTable = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    const multiplicationTableWithoutZeros = multiplicationTable.slice(1).map(row => row.slice(1));
    console.log(multiplicationTableWithoutZeros);
}

//IndexOf Word 
{
    const text = prompt('Введіть рядок із декількох слів.').toLocaleUpperCase();
    const itemText = prompt('Введіть будь-яке слово із цього рядка.').toLocaleUpperCase();
    const arr = text.split(' ');
    const index = arr.indexOf(itemText);

    if (index > -1) {
        alert(`Ваше слово за рахунком в рядку: ${index + 1}`);
    } else {
        alert('Такого слова у вказаному рядку не виявлено.');
    }
}

//Reverse 
{
    let arr = [];
    let text = prompt('Введіть рядок із 5 елементів');
    arr = text.split(' ');
    let arrReverse = [];
    for (let i = 0; i < arr.length; i+2) {
        arrReverse.push(arr.pop());
    }
    console.log("Масив у зворотньому порядку:", arrReverse);
}    

//Reverse 2 
{
    let arr = [];
    let text = prompt('Введіть рядок із 5 елементів');
    arr = text.split(' ');
    let arrReverse = [];
    for (let i = 0; i < arr.length; i+2) {
        arrReverse.push(arr.pop());
    }
    console.log("Масив у зворотньому порядку:", arrReverse);
    for (let i = 0; i < Math.floor(arrReverse.length / 2); i++) {
        let temp = arrReverse[i];
        arrReverse[i] = arrReverse[arrReverse.length - 1 - i];
        arrReverse[arrReverse.length - 1 - i] = temp;
    }
    console.log("Масив у звичайному порядку:", arrReverse);
}

//Copy
{
    const multiplyTable = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    
    const arr=[...multiplyTable];
    console.log(arr);
}


//Deep Copy
{
    const multiplyTable = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    
    const copyMultiplyTable = [];
    multiplyTable.forEach((elem) => {
        copyMultiplyTable.push([...elem]);
    });
    console.log(copyMultiplyTable);
}

//Array Equals 
{
    const arr1 = [1, 2, 3];
    const arr2=arr1;
}

//Flat 
{
    const multiplyTable = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    const arr = multiplyTable.flat();
    console.log(arr);    
}

//Destruct
{
    const text = prompt('Введіть будь-яке речення.');
    const [firstLetter, , , , fifthLetter, , , , ninthLetter] = text;
    
    console.log("Перша літера:", firstLetter);
    console.log("П'ята літера:", fifthLetter);
    console.log("Дев'ята літера:", ninthLetter);
}
    
//Destruct default
{
    const text = prompt('Введіть будь-яке речення.');
    const [ , secondLetter = '!', , fourthLetter = '!', fifthLetter = '!', , , ,] = text;
    
    console.log("Друга літера:", secondLetter);
    console.log("Четверта літера:", fourthLetter);
    console.log("П'ята літера:", fifthLetter);
}


//Multiply table rest
{
    const multiplyTable = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    
    const trimmedRows = multiplyTable.map(([_, ...rest]) => rest.filter(num => num !== 0));
    const nonZeroRows = trimmedRows.filter(row => row.length > 0);
    
    console.log(nonZeroRows);
}

//For Alert
{
    const names = ["John", "Paul", "George", "Ringo"];
    for (const name of names){
        alert(`${name}`)
    }
}


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
    let str = '<table style="border: 1px solid red;"><tr>';
    for (const name of names){
        str += `<td style="border: 1px solid red;"> ${name}</td>`;
    }
    str += "</tr></table>";
    document.write(str);
}

//For Table Vertical
{
    const names = ["John", "Paul", "George", "Ringo"];
    let str = '<table style="border: 1px solid blue;">';
    for (const name of names){
        str += `<tr><td style="border: 1px solid blue;"> ${name}</td></tr>`;
    }
    str += "</table>";
    document.write(str);
}

//For Table Letters
{
    const names = ["USD", "EUR", "GBP", "UAH"];
    let str = '<table style="border: 1px solid yellow;">';

    for (const name of names){
        str += '<tr>';
        for (const letter of name){
            str += `<td style="border: 1px solid yellow;"> ${letter}</td>`;
        }
        str += '</tr>';
    }
    str += "</table>";
    document.write(str);
}

//For Multiply Table
{
    const multiplyTable = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
    ];
    document.write('<table border="1">');
    
    for (let rowIdx = 0; rowIdx < multiplyTable.length; rowIdx++) {
        const row = multiplyTable[rowIdx];
        document.write('<tr style="background-color: ' + (rowIdx % 2 === 0 ? 'lightblue' : 'lightgreen') + '">');
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
            document.write('<td>' + row[colIdx] + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

//Function Capitalize
{
    const capitalize = str => {
        let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        return result;
    }
    console.log(capitalize("cANBerRa"));
}

//Map Capitalize
{
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const text = prompt('Введіть будь-яке речення.');
    const arr = text.split(' ');
    const textCapitalize = arr.map(word => capitalize(word));
    const result = textCapitalize.join(' ');
    console.log(result);
}

//Filter Lexics
{
    const badWords = ["отойво", "оцейво", "тута"];
    const text = prompt("Будь ласка, введіть текст:").toLowerCase();
    const arr = text.split(' ');
    const filteredArr = arr.filter(word => !badWords.includes(word));
    const result = filteredArr.join(' ');
    console.log(filteredArr);
}

//Beep Lexics
{
    const forbiddenWords = ["отойво", "оцейво", "тута"];
    const text = prompt("Будь ласка, введіть текст:").toLowerCase();
    const words = text.split(' ');
    const modifiedWords = words.map(word => forbiddenWords.includes(word) ? 'BEEP' : word);
    const result = modifiedWords.join(' ');
    console.log(result);
}

//Reduce HTML
{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";
    str += currencies.reduce((a, b) => {
        return a + `<option value="${b}">${b}</option>`;
    }, "");
    str += "</select>";
    document.write(str) 
}
