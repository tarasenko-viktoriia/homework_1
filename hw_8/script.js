document.addEventListener('click', (event) => { //Створюємо подію click 
    eventClick (event.clientX, event.clientY); //clientY -  вертикальна координата точки, clientX -  горизонтальна координата точки, 
});

const eventClick = (x, y) => {
    const dot = document.createElement('div');// створює елемент div в памёяті
    dot.classList.add('dot');//додали class=dot (знаходиться в index.html) для елемента dot
    dot.style.left = (x - 5) + 'px'; //Здвигаємо крапку лівіше він кліку, це робиться для того, щоб крапка була прям під курсором після кліку
    dot.style.top = (y - 5) + 'px'; //Здвигаємо крапку нижче він кліку, це робиться для того, щоб крапка була прям під курсором після кліку
    document.body.append(dot)//додаємо елемент dot останнім в body
}

const addRowButton = document.getElementById("addRowButton");//знаходимо кнопку по ID

const createTable = (n) => { //додаємо n в функцію
  const main = document.createElement("div");// створюємо div
  main.id = "main";//додаємо div id='main'
  
  const table = document.createElement("table");// створюємо таблицю
  table.style.border = "1px solid black";// робимо розмітку таблиці

  let index = 1; // початковий індекс = 1

  for (let i = 0; i < n; i++) {//Цикл for виконується n разів. Змінна i починається з 0 і збільшується на 1 при кожній ітерації, доки не досягне n.
    const tr = document.createElement("tr");//створюється новий рядок (<tr>)
    for (let j = 0; j < n; j++) {//Цей вкладений цикл відповідає за створення комірок (<td>) у кожному рядку таблиці.
      const td = document.createElement("td");//створюється нова комірка (<td>) 
      td.innerText = index++;//Кожній комірці присвоюється текстове значення, яке дорівнює поточному значенню змінної index, після чого index збільшується на 1 за допомогою index++. Це дозволяє нумерувати комірки починаючи з 1 і збільшувати значення індексу для кожної наступної комірки.
      td.style.border = "1px solid black";// робимо розмітку
      tr.append(td);//додаємо елемент td останнім в tr
    }
    table.append(tr);//додаємо елемент tr останнім в table
  }

  main.append(table);//додаємо елемент table останнім в main
  document.body.append(main);//додаємо елемент main останнім в body
}

addRowButton.addEventListener("click", () => { //Створюємо подію click 
  const table = document.querySelector("table");//пошук елемента по селектору
  const rowsCount = table.rows.length;//містить кількість рядків у таблиці 
  const cellsCount = table.rows[0].cells.length;//містить кількість комірок у першому рядку таблиці 
  let index = rowsCount * cellsCount + 1; // робиться для того, щоб знайти наступний доступний індекс для нового рядка

  const newRow = document.createElement("tr");//створення нового рядка
  for (let i = 0; i < cellsCount; i++) {//пройде через кожну комірку у рядку таблиці від першої до останньої, збільшуючи змінну i на 1 після кожної ітерації.
    const td = document.createElement("td");//створення нового стовпчика
    td.innerText = index++;//присвоюється текстовий вміст, який відповідає поточному значенню index, і після цього index збільшується на 1 для наступної комірки
    td.style.border = "1px solid black";
    newRow.append(td);//додаємо стовпчик
  }
  table.append(newRow);//додаємо рядок
});

createTable(4); // n=4
