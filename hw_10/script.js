//while confirm
while (!confirm("Ви втомились?")) {};

//array fill
{
  let arr = [];
  while (true) {
      let userInput = prompt("Введіть елемент масиву:");
      if (userInput === null) {
          break;
      } else {
          arr.push(userInput);
      }
  }
  console.log("Отриманий масив:", arr);  
}

//array fill nopush
{
  const arr = [];
  let index = 0;
  while (true) {
    const answer = prompt("Введіть щось ");
    if (answer) {
      arr[index] = answer;
      index++;
    } else {
      break;
    }
  }
  console.log(arr);
}

//infinite probability
let index = 0;
while (true) {
    const num = Math.random();
    if (num > 0.9) {
      break;
    }
    index++
}
console.log(`Кількість ітерацій: ${index}`)

//empty loop
while (!prompt()) {};

//progression sum
{
  const sum = (N) => {
  let sum = 0;
  for (let i = 1; i <= N; i += 3) {
      sum += i;
  }
  return sum;
  }
  let N = +prompt("Введіть N"); 
  let result = sum(N);
  console.log(`Сума арифметичної прогресії від 1 до ${N} з кроком 3:`, result);
}

//chess one line
{
  let i = ".";
  let e = "#";
  let str = "";
  let length = 8;
  for (let j = 0; j < length / 2; j++) {
    str += i + e;
  }
  if (length % 2 === 1) {
    str = str.slice(0, -1);
  }
  console.log(str);
}

//numbers
{
  let str = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);  
}

//chess
  let i = ".";
  let e = "#";
  let str = "";
  let length = 12;
  let rows = 10;
  for (let row = 0; row < rows; row++) {
    for (let j = 0; j < length / 2; j++) {
      str += i + e;
    }
    if (length % 2 === 1) {
      str = str.slice(0, -1);
    }
    str += "\n";
  }
  console.log(str);

//cubes
{
  let n = parseInt(prompt("Введіть кількість елементів масиву:"));
  let arr = [];
  for (let i = 0; i < n; i++) {
      arr.push(i ** 3);
  }
  console.log("Масив кубів індексів:", arr);
}

//multiply table
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr[i] = []; 
    for (let j = 1; j <= 10; j++) {
        arr[i][j] = i * j; 
    }
}
let result = arr[2][6]; 
console.log(result);

//read array of objects
  const readArrayOfObjects = () => {
    let arrayOfObjects = [];
    while (true) {
        let object = {};
        let continueInput = true;
        while (true) {
            let key = prompt("Введіть ключ об'єкта:");
            if (key === null) 
            break;
            let value = prompt("Введіть значення об'єкта:");
            if (value === null) 
            break;
            object[key] = value;
            continueInput = confirm("Бажаєте додати ще ключі та значення до цього об'єкта?");
            if (!continueInput) 
            break;
        }
        arrayOfObjects.push(object);
        let continueAdding = confirm("Бажаєте додати ще об'єкти до масиву?");
        if (!continueAdding) 
        break;
    }
    return arrayOfObjects;
  }
  console.log("Масив об'єктів:", readArrayOfObjects);

//Ромбік
  const size = +prompt();

  const halfRow = Math.floor(size / 2);
  let dotsLength = halfRow;
  let cagesLength = 1;

  for (let i = 0; i < halfRow; i++) {
    const dots = "".padStart(dotsLength, ".");
    const cage = "".padStart(cagesLength, "#");
    console.log(dots + cage + dots);
    cagesLength += 2;
    dotsLength--;
  }

  for (let j = 0; j < halfRow + 1; j++) {
    const dots = "".padStart(dotsLength, ".");
    const cage = "".padStart(cagesLength, "#");
    console.log(dots + cage + dots);
    cagesLength -= 2;
    dotsLength++;
  }

//DOM: multiply table
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');

  for (let i = 1; i <= 10; i++) {
      let row = document.createElement('tr');
      for (let j = 1; j <= 10; j++) {
          let cell = document.createElement('td');
          cell.innerText = i * j;
          cell.addEventListener('mouseover', function() { //DOM: highlight cell
            this.style.backgroundColor = 'pink';
          });
          cell.addEventListener('mouseout', function() {//DOM: highlight cell
              this.style.backgroundColor = '';
          });
          row.append(cell);
      }
      tbody.append(row);
  }
  table.append(tbody);
  document.body.append(table);


