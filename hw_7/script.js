// Temperature
    const f = (degreesCelsius) => {
        const degreesFahrenheit = ((degreesCelsius * 9 / 5) + 32);
        return degreesFahrenheit;
    }
// RGB
    const formatColor = (r, g, b)=> {
        const toHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        const rr = toHex(r);
        const gg = toHex(g);
        const bb = toHex(b);
        return `#${rr}${gg}${bb}`;
    }
    console.log(formatColor(250, 250, 250));
// Flats
    const flats = (result) => {

        const floor = parseInt(prompt("Enter the number of floors in the building"));
        const apartmentQuantity = parseInt(prompt("Enter the number of apartments in the building"));
        const apartmentNumber = parseInt(prompt("Enter the number of the desired apartment"));
        
        const apartmentQuantityFloor = floor * apartmentQuantity;
        const entrance = Math.ceil(apartmentNumber / apartmentQuantityFloor);
        const floorNumber = Math.ceil((apartmentNumber % apartmentQuantityFloor) / apartmentQuantity);

        return { entrance, floor: floorNumber };
    }
    console.log(flats())
// Credentials
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const userInfo = () => {
        let name = prompt("Будь ласка, введіть ваше ім'я:").trim().toLowerCase();
        let surname = prompt("Будь ласка, введіть ваше прізвище:").trim().toLowerCase();
        let fatherName = prompt("Будь ласка, введіть ваше по-батькові:").trim().toLowerCase();
        name = capitalize(name);
        surname = capitalize(surname);
        fatherName = capitalize(fatherName);
        const fullName = name + ' ' + surname + ' ' + fatherName;
        return { name, surname, fatherName, fullName };
    }
    const user = userInfo();
    console.log(user);

// New line
    const newLine = (input) => {
        return input.split('\\n').join('\n');
    };
    let userInput = prompt("Введіть рядок з \\n як маркером нового рядка:");
    let result = newLine(userInput);
    console.log(result);

// Prompt OR
    const getAge = (promptText, defaultValue = 'я безсмертний') => +prompt(promptText) || defaultValue;
    const promptText = "Введіть ваш вік";
    const age = getAge(promptText);
    console.log(age);

// Login And Password
{
    const loginAndPassword = (correctlogin, correctpassword) => {
        const login = prompt("Введіть ваш логін");
        if (login === correctlogin) {
            const password = prompt("Введіть ваш пароль");
            if (password === correctpassword) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    
    const correctlogin = "admin";
    const correctpassword = "qwerty";
    const result = loginAndPassword(correctlogin, correctpassword);
    console.log(result);
}
// Filter Lexics
{
    const filterBadWords = (text, badWords) => {
        const arr = text.toLowerCase().split(' ');
        const filteredArr = arr.filter(word => !badWords.includes(word));
        return filteredArr.join(' ');
    }
    
    const inputText = prompt("Будь ласка, введіть текст:");
    const badWords = ["бляха", "муха", "пляшка", "шабля"];
    const result = filterBadWords(inputText, badWords);
    console.log(result);
}
// Array of objects sort
const sort = (array, field, ascending = true) => {
    return array.sort((a, b) => {
        let comparison = 0;
        if (a[field] > b[field]) {
            comparison = 1;
        } else if (a[field] < b[field]) {
            comparison = -1;
        }
        return ascending ? comparison : -comparison;
    });
};
const person = [
    {name: "Іван", age: 17},
    {name: "Марія", age: 35},
    {name: "Олексій", age: 73},
    {name: "Яків", age: 12},
];
const sortedByAgeAscending = sort([...person], 'age');
console.log(sortedByAgeAscending);

const sortedByNameDescending = sort([...person], 'name', false);
console.log(sortedByNameDescending);
    
// Table 
    const displayTable = (array, sortField, sortOrder) => {
        const sortedArray = [...array];
        sortedArray.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[sortField] > b[sortField] ? 1 : -1;
            } else {
                return a[sortField] < b[sortField] ? 1 : -1;
            }
        });
        const columns = [];
        sortedArray.forEach(item => {
            for (const key in item) {
                if (!columns.includes(key)) {
                    columns.push(key);
                }
            }
        });
        let tableHTML = '<table style="border: 1px solid black;"><thead><tr>';
        columns.forEach(column => {
            tableHTML += `<th style="border: 1px solid black;">${column}</th>`;
        });
        tableHTML += '</tr></thead><tbody>';
        sortedArray.forEach(item => {
            tableHTML += '<tr>';
            columns.forEach(column => {
                tableHTML += `<td style="border: 1px solid black;">${item[column] || ''}</td>`;
            });
            tableHTML += '</tr>';
        });
        tableHTML += '</tbody></table>';
        document.write(tableHTML);
    }
    const persons = [
        {
            "Name": "chevrolet chevelle malibu",
            "Cylinders": 8,
            "Displacement": 307,
            "Horsepower": 130,
            "Weight_in_lbs": 3504,
            "Origin": "USA"
        },
        {
            "Name":"buick skylark 320",
            "Miles_per_Gallon":15,
            "Cylinders":8,
            "Displacement":350,
            "Horsepower":165,
            "Weight_in_lbs":3693,
            "Acceleration":11.5,
            "Year":"1970-01-01",
        },
        {
            "Miles_per_Gallon":18,
            "Cylinders":8,
            "Displacement":318,
            "Horsepower":150,
            "Weight_in_lbs":3436,
            "Year":"1970-01-01",
            "Origin":"USA"
        },
        {
            "Name":"amc rebel sst",
            "Miles_per_Gallon":16,
            "Cylinders":8,
            "Displacement":304,
            "Horsepower":150,
            "Year":"1970-01-01",
            "Origin":"USA" 
        }
    ];
    displayTable(persons, 'Name', 'asc');

// Calc Func
{
    const calculateMonthlySalary = (rate, numberDaysMonth, daysWorked) => {
        let monthlySalary = rate / numberDaysMonth * daysWorked;
        monthlySalary = parseFloat(monthlySalary.toFixed(2));
        return monthlySalary;
    }
    const rate = +prompt("Enter your monthly rate"); 
    let numberDaysMonth = +prompt("Enter the number of days in this month (not more than 31)"); 
    numberDaysMonth = Math.min(numberDaysMonth, 31); 
    let daysWorked = +prompt("Enter the number of days worked this month (not more than 31)"); 
    daysWorked = Math.min(daysWorked, 31); 
    const monthlySalary = calculateMonthlySalary(rate, numberDaysMonth, daysWorked);
    alert(`Your monthly salary is: ${monthlySalary} ₴.`);   
}

// Calc Live
const calculateMonthlySalary = (rate, numberDaysMonth, daysWorked) => {
    let monthlySalary = rate / numberDaysMonth * daysWorked;
    monthlySalary = parseFloat(monthlySalary.toFixed(2)); 
    return monthlySalary;
}

function calculateSalary() {
    const rate = parseFloat(document.getElementById("rate").value);
    const numberDaysMonth = parseInt(document.getElementById("numberDaysMonth").value);
    const daysWorked = parseInt(document.getElementById("daysWorked").value);
    const monthlySalary = calculateMonthlySalary(rate, numberDaysMonth, daysWorked);
    document.getElementById("result").innerText = `Your monthly salary is: ${monthlySalary} ₴.`;
}