// // fetch basic & fetch improved
function displayJSONasTable(container, json) {
    const table = document.createElement("table");
    table.style.border = "1px solid black";

    const headerRow = document.createElement("tr");
    for (const key in json) {
        const headerCell = document.createElement("th");
        headerCell.textContent = key;
        headerCell.style.border = "1px solid black"; 
        headerRow.append(headerCell);
    }
    table.append(headerRow);

    const dataRow = document.createElement("tr");
    for (const key in json) {
        const dataCell = document.createElement("td");
        const value = json[key];

        if (typeof value === 'string' || Array.isArray(value)) {
            if (typeof value === 'string' && value.includes('https://swapi.py4e.com/api')) {
                const button = document.createElement('button');
                button.textContent = 'Fetch Data';
                button.onclick = () => {
                    fetchAndDisplayData(value, dataCell);
                };
                dataCell.append(button);
            } else {
                dataCell.innerText = value;
            }
        } else if (typeof value === 'object') { 
            displayJSONasTable(dataCell, value);
        }
        dataCell.style.border = "1px solid black";
        dataRow.append(dataCell);
    }
    table.append(dataRow);

    container.append(table);
}

function fetchAndDisplayData(url, container) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            container.innerText = ''; 
            displayJSONasTable(container, data); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetch('https://swapi.py4e.com/api/people/1/')
    .then(res => res.json())
    .then(luke => {
        const container = document.getElementById("container");
        displayJSONasTable(container, luke);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// // Promisify: confirm
function confirmPromise(text) {
  return new Promise((resolve, reject) => {
    const result = confirm(text);
    if (result) {
      resolve();
    } else {
      reject();
    }
  });
}

confirmPromise("Проміси це складно?")
  .then(() => console.log("не так вже й складно"))
  .catch(() => console.log("respect за посидючість і уважність"));

// // Promisify: prompt
function promptPromise(text) {
  return new Promise((resolve, reject) => {
    const userInput = prompt(text);
    if (userInput !== null) {
      resolve(userInput);
    } else {
      reject();
    }
  });
}

promptPromise("Як тебе звуть?")
  .then((name) => console.log(`Тебе звуть ${name}`))
  .catch(() => console.log("Ну навіщо морозитися, нормально ж"));

