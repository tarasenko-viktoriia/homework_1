// Literals
{
    const cat = {
        name: "Кузя",
        age: 4,
        neutered: true,
   }
    const dog = {
        name: "Баккі",
        age: 2,
        neutered: false,
    }
    console.log(cat);
    console.log(dog);
}

// Literals expand
{
    const key1 = prompt("Введіть назву першого ключа");
    const value1 = prompt("Введіть значення першого ключа");
    const key2 = prompt("Введіть назву другого ключа");
    const value2 = prompt("Введіть значення другого ключа");

    const cat = {
        name: "Кузя",
        age: 4,
        neutered: true,
        [key1]: value1,
        [key2]: value2
   }
   console.log(cat)
}

// Literals copy
{
    const key1 = prompt("Введіть назву першого ключа");
    const value1 = prompt("Введіть значення першого ключа");
    const key2 = prompt("Введіть назву другого ключа");
    const value2 = prompt("Введіть значення другого ключа");

    const cat = {
        name: "Кузя",
        age: 4,
        neutered: true,
        [key1]: value1,
        [key2]: value2,
   }
   const key3 = prompt("Введіть назву третьго ключа");
   const value3 = prompt("Введіть значення третьго ключа");

   const cat2 = {
        ...cat,
        [key3]: value3
   }

   console.log(cat2)
}

// Html tree
{
    const body = {
        tagName: "body",
        parent: null,
        children: [ 
            {
                tagName: "div",
                parent: "body",
                children: [ 
                    {
                        tagName: "span",
                        parent: "div",
                        children: ['Enter a data please:'],
                    },
                    {
                        tagName: "br",
                        parent: "div",
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "name"
                        },
                        parent: "div",
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "surname"
                        },
                        parent: "div",
                    }
                ]
            },
            {
                tagName: "div",
                parent: "body",
                children: [ 
                    {
                        tagName: "button",
                        attrs: {
                            id: "ok"
                        },
                        children: ['OK'],
                        parent: "div",
                        
                    },
                    {
                        tagName: "button",
                        attrs: {
                            id: "cancel"
                        },
                        children: ['Cancel'],
                        parent: "div",
                    },
                ]
            }
        ]
    }
console.log(body.children[1].children[1].children);
console.log(body.children[0].children[3].attrs.id);
}
// Parent
{
    const body = {
        tagName: "body",
        parent: null,
        children: [ 
            {
                tagName: "div",
                parent: "body",
                children: [ 
                    {
                        tagName: "span",
                        parent: "div",
                        children: ['Enter a data please:'],
                    },
                    {
                        tagName: "br",
                        parent: "div",
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "name"
                        },
                        parent: "div",
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "surname"
                        },
                        parent: "div",
                    }
                ]
            },
            {
                tagName: "div",
                parent: "body",
                children: [ 
                    {
                        tagName: "button",
                        attrs: {
                            id: "ok"
                        },
                        children: ['OK'],
                        parent: "div",
                        
                    },
                    {
                        tagName: "button",
                        attrs: {
                            id: "cancel"
                        },
                        children: ['Cancel'],
                        parent: "div",
                    },
                ]
            }
        ]
    }
}
// Change OK 
{
    const body = {
        tagName: "body",
        parent: null,
        children: [ 
            {
                tagName: "div",
                parent: "body",
                children: [ 
                    {
                        tagName: "span",
                        parent: "div",
                        children: ['Enter a data please:'],
                    },
                    {
                        tagName: "br",
                        parent: "div",
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "name"
                        },
                        parent: "div",
                    },
                    {
                        tagName: "input",
                        attrs: {
                            type: "text",
                            id: "surname"
                        },
                        parent: "div",
                    }
                ]
            },
            {
                tagName: "div",
                parent: "body",
                children: [ 
                    {
                        tagName: "button",
                        attrs: {
                            id: "ok",
                            customAttribute: prompt("Введіть значення для ключа:"),
                        },
                        children: ['OK'],
                        parent: "div",
                        
                    },
                    {
                        tagName: "button",
                        attrs: {
                            id: "cancel"
                        },
                        children: ['Cancel'],
                        parent: "div",
                    },
                ]
            }
        ]
    }
    console.log(body);
}
// Destructure
{
    const body = {
        tagName: "body",
        children: [
          {
            tagName: "div",
            children: [
              {
                tagName: "span",
                children: ["Enter a data please:"],
              },
              {
                tagName: "br",
              },
              {
                tagName: "input",
                attr: {
                  type: "text",
                  id: "name",
                },
              },
              {
                tagName: "input",
                attr: {
                  type: "text",
                  id: "surname",
                },
              },
            ],
          },
          {
            tagName: "div",
            children: [
              { 
                tagName: "button", 
                attr: { id: "ok" }, 
                children: ["Ok"] 
            },
              { 
                tagName: "button", 
                attr: { id: "cancel" }, 
                children: ["Cancel"] 
            },
            ],
          },
        ],
    };
    const {
        children: [
          {
            children: [
              {
                children: [text],
              },
            ],
          },
        ],
      } = body;
      console.log("span:", text);
    
      const {
        children: [
          ,
          {
            children: [
              ,
              {
                children: [btnText],
              },
            ],
          },
        ],
      } = body;
      console.log("children:", btnText);

      const {
        children: [
          {
            children: [
              ,
              ,
              ,
              {
                attr: { id },
              },
            ],
          },
        ],
      } = body;
      console.log("input:", id);
}
// Destruct array
{
    let arr = [1,2,3,4,5, "a", "b", "c"];
    let [odd1, even1, odd2, even2, odd3, ...letters] = arr;
    console.log("Odd Numbers:", odd1, odd2, odd3);
    console.log("Even Numbers:", even1, even2);
    console.log("Letters:", letters);
}
// Destruct string
{
    let arr = [1, "abc"];
    let [number, str] = arr;
    let [s1, s2, s3] = str.split('');
    console.log("Number:", number);
    console.log("s1:", s1);
    console.log("s2:", s2);
    console.log("s3:", s3);
}
// Destruct 2
{
    const obj = {name: 'Ivan',
    surname: 'Petrov',
    children: [{name: 'Maria'}, {name: 'Nikolay'}]}

    const { children: [{ name: name1 }, { name: name2 }] } = obj;

    console.log("Name of child 1:", name1);
    console.log("Name of child 2:", name2);
}
// Destruct 3
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 10];

    let [a, b, ...rest] = arr;

    console.log("a:", a);
    console.log("b:", b);
    console.log("Length:", arr.length);
}
// Copy delete
{
    const cat = {
        name: "Кузя",
        age: 4,
        neutered: true
    };
    const { name, ...rest } = cat;
    const copiedCat = { ...rest };
    console.log(copiedCat);
}
// Currency real rate 
{
    fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      const inputCurrency = prompt("Введіть вхідну валюту.").toUpperCase();
      const outputCurrency = prompt("Введіть валюту, в яку треба конвертувати.").toUpperCase();
      const amount = +prompt("Введіть суму для обміну.");
      const { rates } = data;
      const inputRate = rates[inputCurrency];
      const outputRate = rates[outputCurrency];
      if (inputRate && outputRate && !isNaN(amount)) {
        const result = (amount * inputRate) / outputRate;
        console.log("Результат:", result.toFixed(2));
      } else {
        console.log("Введіть коректні дані.");
      }
    });
}
// Currency drop down
{
fetch("https://open.er-api.com/v6/latest/USD")
    .then(res => res.json())
    .then(data => {
        const rates = data.rates;

        const selectElement = document.createElement('select');
        selectElement.id = 'fromCurrency';

        for (const currency in rates) {
            const optionElement = document.createElement('option');
            optionElement.value = currency;
            optionElement.textContent = currency;
            selectElement.appendChild(optionElement);
        }

        document.body.appendChild(selectElement);

        selectElement.addEventListener('change', () => {
            const fromCurrency = selectElement.value;

            const toCurrency = prompt("Введіть валюту, в яку треба конвертувати.");
            const amount = parseFloat(prompt("Введіть суму для обміну."));

            if (!(fromCurrency.toUpperCase() in rates) || !(toCurrency.toUpperCase() in rates)) {
                console.error("Вказано невірну валюту.");
                return;
            }

            const rate = rates[toCurrency.toUpperCase()];
            const convertedAmount = amount * rate;

            console.log(`Результат конвертації: ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`);
        });
    })
    .catch(error => {
        console.error("Введіть коректні дані.", error);
    });
}
Table
{
    const persons = [
        {
            "Name":"chevrolet chevelle malibu",
            "Cylinders":8,
            "Displacement":307,
            "Horsepower":130,
            "Weight_in_lbs":3504,
            "Origin":"USA"
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
    
    const columns = [];
    persons.forEach(person => {
        for (const key in person) {
            if (!columns.includes(key)) {
                columns.push(key);
            }
        }
    });
    
    let tableHTML = '<table><thead><tr>';
    columns.forEach(column => {
        tableHTML += `<th>${column}</th>`;
    });
    tableHTML += '</tr></thead><tbody>';
    
    persons.forEach(person => {
        tableHTML += '<tr>';
        columns.forEach(column => {
            tableHTML += `<td>${person[column] || ''}</td>`;
        });
        tableHTML += '</tr>';
    });
    
    tableHTML += '</tbody></table>';
    
    document.write(tableHTML) 
}