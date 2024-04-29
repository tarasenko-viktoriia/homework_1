// fetch basic & fetch improved
// function displayJSONasTable(container, json) {
//     const table = document.createElement("table");
//     table.style.border = "1px solid black";

//     const headerRow = document.createElement("tr");
//     for (const key in json) {
//         const headerCell = document.createElement("th");
//         headerCell.textContent = key;
//         headerCell.style.border = "1px solid black"; 
//         headerRow.append(headerCell);
//     }
//     table.append(headerRow);

//     const dataRow = document.createElement("tr");
//     for (const key in json) {
//         const dataCell = document.createElement("td");
//         const value = json[key];

//         if (typeof value === 'string' || Array.isArray(value)) {
//             if (typeof value === 'string' && value.includes('https://swapi.py4e.com/api')) {
//                 const button = document.createElement('button');
//                 button.textContent = 'Fetch Data';
//                 button.onclick = () => {
//                     fetchAndDisplayData(value, dataCell);
//                 };
//                 dataCell.append(button);
//             } else {
//                 dataCell.innerText = value;
//             }
//         } else if (typeof value === 'object') { 
//             displayJSONasTable(dataCell, value);
//         }
//         dataCell.style.border = "1px solid black";
//         dataRow.append(dataCell);
//     }
//     table.append(dataRow);

//     container.append(table);
// }

// function fetchAndDisplayData(url, container) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             container.innerText = ''; 
//             displayJSONasTable(container, data); 
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

// fetch('https://swapi.py4e.com/api/people/1/')
//     .then(res => res.json())
//     .then(luke => {
//         const container = document.getElementById("container");
//         displayJSONasTable(container, luke);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });



// race
const fetchFromSWAPI = fetch('https://swapi.py4e.com/api/people/1/')
    .then(response => response.json())
    .then(data => {
        return {
            source: 'SWAPI',
            data: data
        };
    })
    .catch(error => {
        console.error('Error fetching data from SWAPI:', error);
        throw error;
    });

const delay = new Promise(resolve => {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
        resolve({
            source: 'Delay',
            delay: randomDelay
        });
    }, randomDelay);
});

Promise.race([fetchFromSWAPI, delay])
    .then(result => {
        console.log('The faster source is:', result.source);
        if (result.source === 'SWAPI') {
            console.log('Data from SWAPI:', result.data);
        } else {
            console.log('Delay:', result.delay, 'ms');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


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
// function loginForm(parent) {
//     this.parent = parent;
//     this.login = '';
//     this.password = '';

//     this.renderForm = function () {
//         const form = document.createElement('form');
//         const loginInput = document.createElement('input');
//         loginInput.setAttribute('type', 'text');
//         loginInput.setAttribute('placeholder', 'Login');
//         loginInput.addEventListener('input', (event) => {
//             this.login = event.target.value;
//         });

//         const passwordInput = document.createElement('input');
//         passwordInput.setAttribute('type', 'password');
//         passwordInput.setAttribute('placeholder', 'Password');
//         passwordInput.addEventListener('input', (event) => {
//             this.password = event.target.value;
//         });

//         const submitButton = document.createElement('button');
//         submitButton.innerText = 'Login...';
//         submitButton.type = 'submit';

//         form.append(loginInput);
//         form.append(passwordInput);
//         form.append(submitButton);

//         form.addEventListener('submit', (event) => {
//             event.preventDefault();
//             this.resolvePromise();
//         });

//         this.parent.append(form);
//     };

//     this.resolvePromise = function () {
//         const data = {
//             login: this.login,
//             password: this.password
//         };
//         this.promiseResolver(data);
//     };

//     this.renderForm();
// }

// function loginPromise(parent) {
//     return new Promise((resolve, reject) => {
//         const form = new loginForm(parent);
//         form.promiseResolver = resolve;
//     });
// }

// loginPromise(document.body).then(({ login, password }) => console.log(`Ви ввели ${login} та ${password}`));
