//blocks
let a = 10;
{
  let b = 20;
  {
    let c = 30;
    //a=100, b=21, c=30, d-is not defined
    b++;
    a *= 10;
  }
  {
    let c = 50;
    //a=100, b=521, c=50, d-is not defined
    b += 500;
  }
  {
    const a = 100500;
    const d = "value";
    //a=100500, b=521, c=is not defined, d-value
    {
      let a = -50;
      b = 1000;
      //a=-50, b=1000, c=is not defined, d-value
    }
    //a=100500, b=1000, c=is not defined, d-value
  }
  //a=100, b=1000, c=is not defined, d-is not define
}
//a=100, b-is not define, c-is not define, d-is not define

//comparison if
// const age = +prompt("Скільки вам років?", "");
// if (age < 0) {
//   alert("негативний вік");
// } else if (age < 18) {
//   alert("школяр");
// } else if (age > 18 && age < 30) {
//   alert("молодь");
// } else if (age > 30 && age < 45) {
//   alert("зрілість");
// } else if (age > 45 && age < 60) {
//   alert("захід сонця");
// } else if (age > 60) {
//   alert("як пенсія?");
// } else {
//   alert("чи кіборг, чи KERNESS");
// }

//switch: sizes
// const size = +prompt("Введыть ваш розмір від 40 до 54");
// switch (size) {
//     case 40:
//         alert("8");
//         break;
//     case 42:
//         alert("10");
//         break;
//     case 44:
//         alert("12");
//         break;
//     case 46:
//         alert("14");
//         break;
//     case 48:
//         alert("16");
//         break;
//     case 50:
//         alert("18");
//         break;
//     case 52:
//         alert("20");
//         break;
//     case 54:
//         alert("22");
//         break;
//     default:
//         alert("no size");
// }

//switch: if
// const color = prompt("Введіть колір", "");
// if (color) {
//   if (color === "red" || color === "black") {
//     document.write("<div style='background-color: red;'>червоний</div>");
//     document.write("<div style='background-color: black; color: white;'>чорний</div>");
//   } else if (color === "blue" || color === "green") {
//     document.write("<div style='background-color: blue;'>синій</div>");
//     document.write("<div style='background-color: green;'>зелений</div>");
//   } else {
//     document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
//   }
// }

//noswitch
// const noSwitch = (key, cases, defaultKey='default') => {
//     if (key in cases && typeof cases[key] === 'function') {
//         return cases[key]();
//     } else if (defaultKey in cases && typeof cases[defaultKey] === 'function') {
//         return cases[defaultKey]();
//     }
// }
// // Умова key in cases перевіряє, чи існує ключ key у об'єкті cases. Наприклад, якщо key дорівнює "воду", то перевірка key in cases поверне true, оскільки в об'єкті cases є ключ "воду".
// // Умова typeof cases[key] === 'function' перевіряє, чи значення, яке пов'язане з ключем key, є функцією. Якщо це так, то ця умова поверне true.

// // Умова defaultKey in cases перевіряє наявність ключа defaultKey у об'єкті cases. 
// // Якщо цей ключ існує у cases, та значення за ним є функцією, то викликається ця функція. Це забезпечує можливість виконання певних дій, якщо введений ключ не відповідає жодному з передбачених варіантів.
// const drink = prompt("Що ви любите пити")
// noSwitch(drink, {
//     воду: () => console.log('Найздоровіший вибір!'),
//     чай(){
//         console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
//     },
//     "пиво": () => console.log('Добре влітку, та в міру'),
//     віскі: function(){
//         console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
//     },
//     default(){
//         console.log('шото я не зрозумів')
//     }
// })
//closure calc

// fetch('https://open.er-api.com/v6/latest/USD')
//     .then(res => res.json())
//     .then(data => {
//       const container = document.getElementById('currencyContainer');
//       for (const currency in data.rates) {
//           const button = document.createElement('button');
//           button.innerText = currency;
//           button.onclick = () => {
//               const amount = +(prompt(`Введіть суму у ${currency}:`));
//               const convertedAmount = amount * data.rates[currency];
//               alert(`${amount} ${currency} приблизно дорівнює ${convertedAmount.toFixed(2)} USD`);
//           };
//           container.appendChild(button);
//       }
//         console.log(data); 
//     });

//closure calc 2
// const fromSelect = document.getElementById('from');
// const toSelect = document.getElementById('to');
// const rateDiv = document.getElementById('rate');
// const amountInput = document.getElementById('amount');
// const resultDiv = document.getElementById('result');

// // Дані про валюти
// const currencies = ['USD', 'EUR', 'GBP', 'JPY']; // Приклад валют

// // Заповнюємо вибір валют
// currencies.forEach(currency => {
// const option1 = document.createElement('option');
// const option2 = document.createElement('option');
// option1.innerText = currency;
// option2.innerText = currency;
// fromSelect.appendChild(option1);
// toSelect.appendChild(option2);
// });

// // Функція для оновлення курсу та результату
// function updateConversion() {
// const fromCurrency = fromSelect.value;
// const toCurrency = toSelect.value;
// const amount = parseFloat(amountInput.value);
// const rate = 1; // Для простоти, припускаємо, що курс 1 зараз

// // Оновлюємо курс
// rateDiv.innerText = `Курс: 1 ${fromCurrency} = 1 ${toCurrency}`;

// // Обчислюємо та оновлюємо результат
// const result = amount * rate;
// resultDiv.innerText = `Результат: ${result.toFixed(2)} ${toCurrency}`;
// }

// // Назначаємо обробники подій
// fromSelect.onchange = updateConversion;
// toSelect.onchange = updateConversion;
// amountInput.oninput = updateConversion;

// // Початкове оновлення
//  updateConversion();
// // Initial update
// updateRateAndResult();

//countries and cities

fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
    .then(res => res.json())
    .then(data => {
        // Отримуємо посилання на елементи
        const countriesSelect = document.getElementById('countries');
        const citiesSelect = document.getElementById('cities');

        for (const country in data) {
            const option = document.createElement('option');
            option.innerText = country;
            countriesSelect.appendChild(option);
        }

        // Обробник події onchange для вибору країни
        countriesSelect.onchange = function() {
            // Видаляємо старий контент select#cities
            citiesSelect.innerHTML = '';

            // Отримуємо список міст для обраної країни
            const selectedCountry = countriesSelect.value;
            const cities = data[selectedCountry];

            // Додаємо елементи option з містами до select#cities
            cities.forEach(city => {
                const option = document.createElement('option');
                option.innerText = city;
                citiesSelect.appendChild(option);
            });
        };
        console.log(data); 
    });
