const rate = +prompt("Enter your monthly rate"); // Вводиться сума місячної ставки заробітної плати
let numberDaysMonth; 
do {
    numberDaysMonth = +prompt("Enter the number of days in this month (not more than 31)"); // вводиться кількість днів в місяці
} while (numberDaysMonth > 31); // обмежується кількість днів до 31

let daysWorked;
do {
    daysWorked = +prompt("Enter the number of days worked this month (not more than 31)"); // вводиться кількість відпрацьованих днів у місяці
} while (daysWorked > 31); // обмежується кількість днів до 31

let monthlySalary = rate / numberDaysMonth * daysWorked; // розрахунок місячної заробітної плати
monthlySalary = monthlySalary.toFixed(2); // округлення до двох десяткових знаків

alert("Your monthly salary is: " + monthlySalary); // вивидення розміру місячної заробітної плати
