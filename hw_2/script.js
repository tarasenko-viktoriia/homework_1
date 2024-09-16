// Перше завдання

var a = 5;  
var b, c;

b = (a * 5); // це є виразом, обчислюється як a * 5, результат присвоюється b.
b = (c = b/2); // це є виразом, Спочатку обчислюється b/2, результат присвоюється c. Потім значення c присвоюється b.
// Розтавила дужки так, щоб поведінка коду залишилася такою самою:
b = (a * 5);  
b = (c = (b/2));

// Друге завдання 

const age = parseFloat(prompt("Enter your age"));
alert("Your year of birth is " + (2024 - age - 1) + " or " + (2024 - age));

// Третє завдання

const degreesCelsius = parseFloat(prompt("Enter degrees Celsius "));
alert("This is " + ((degreesCelsius * 9 / 5) + 32) + " degrees Fahrenheit.");

// Четверте завдання 

const firstNumber = parseFloat(prompt("Enter the first number"));
const secondNumber = parseFloat(prompt("Enter the second number"));
alert("We split it up and got " + (Math.floor(firstNumber/secondNumber)));

// П'яте завдання

const rate = 42.51; 
const userInput = parseFloat(prompt("Enter the amount in currency:"));
const exchangedAmount = userInput / rate;
const roundedExchangedAmount = exchangedAmount.toFixed(2);
alert(`The result of the exchange: ${roundedExchangedAmount}`);


// Шосте завдання

const red = parseInt(prompt("Enter a value in red (0-255):"));
const green = parseInt(prompt("Enter a value in green (0-255):"));
const blue = parseInt(prompt("Enter a value in blue (0-255):"));
const hexRed = red.toString(16).padStart(2, '0');
const hexGreen = green.toString(16).padStart(2, '0');
const hexBlue = blue.toString(16).padStart(2, '0');
const cssColor = `#${hexRed}${hexGreen}${hexBlue}`;
alert ("The result is a CSS colour: " + cssColor);

// Сьоме завдання 

const floor = parseInt(prompt("Enter the number of floors in the building"));
const apartmentQuantity = parseInt(prompt("Enter the number of apartments in the building"));
const apartmentNumber = parseInt(prompt("Enter the number of the desired apartment"));
const apartmentQuantityFloor = floor * apartmentQuantity;
const entrance = apartmentNumber/apartmentQuantityFloor;
alert("The apartment you need is located in the " +  Math.ceil(entrance) + " entrance on the " + Math.ceil ((apartmentNumber % apartmentQuantityFloor ) / apartmentQuantity) + " floor");

