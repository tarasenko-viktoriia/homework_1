// Arrow to Functions
{
    function answer() {
        let question;
        do {
            question = confirm("Ви втомились?");
        } while (!question);
        console.log("Так, я втомився.");
    }
    answer();
}

{
    let arr = [];
    function addToArray() {
        let userInput = prompt("Введіть елемент масиву:");
        if (userInput !== null) {
            arr.push(userInput); 
            addToArray(); 
        }
    }
    addToArray();
    console.log("Масив користувача:", arr);
}
  
{   
    const arr = [];
    let index = 0;
    function addToArray() {
        const answer = prompt("Введіть щось ");
        if (answer) {
            arr[index] = answer;
            index++;
            addToArray();
        }
    }  
    addToArray();
    console.log("Масив користувача:", arr);
}

{
    function countIterations() {
        let index = 0;
        while (Math.random() <= 0.9) {
            index++;
        }
        alert("Кількість ітерацій: " + index);
    }
    countIterations();
}
{
    const step = 3;
    function receiptAmount (n, step) {
  
        const numOfTerms = Math.floor((n - 1) / step) + 1;
        const sumOfTerms = numOfTerms * (2 + (numOfTerms - 1) * step) / 2;
        return sumOfTerms;
    }
    const N = +prompt("Введіть N");
    const result = receiptAmount(N, step);
    console.log(`Сума арифметичної прогресії від 1 до ${N} з кроком 3:`, result); 
}

// createPerson
{
    function createPerson(name, surname) {
      return {
        name,
        surname,
        getFullName() {
          let str = "";
          Object.values(this).forEach((value) => {
            if (typeof value !== "function") {
              str += `${value} `;
            }
          });
          return str;
        },
      };
    }
  
    const a = createPerson("Вася", "Пупкін");
    const b = createPerson("Ганна", "Іванова");
    const c = createPerson("Єлизавета", "Петрова");
  
    console.log(a.getFullName());
    a.fatherName = "Іванович";
    console.log(a.getFullName()); 
  
    console.log(b.getFullName());
  }

// createPersonClosure
{
    const createPersonClosure = (name, surname) => {
      let fatherName;
      let age;
      function checkText(char) {
        return !!char.match(/[A-ZА-Я]/);
      }
      function getName() {
        return name;
      }
      function getSurname() {
        return surname;
      }
      function getFatherName() {
        return fatherName;
      }
      function getAge() {
        return age;
      }
      function getFullName() {
        return `${surname} ${name} ${fatherName}`;
      }
      function setName(newName) {
        if (checkText(newName[0])) {
          name = newName;
        }
        return name;
      }
      function setSurname(newName) {
        if (checkText(newName[0])) {
          surname = newName;
        }
        return surname;
      }
      function setFatherName(newName) {
        if (checkText(newName[0])) {
          fatherName = newName;
        }
        return fatherName;
      }
      function setAge(newAge) {
        if (newAge >= 0 && newAge <= 100) {
          age = age;
        }
        return age;
      }
      function setFullName(newFullName) {
        const [newSurname, newName, newFatherName] = newFullName.split(" ");
    
        if (checkText(newSurname[0])) {
          surname = newSurname;
        }
        if (checkText(newName[0])) {
          name = newName;
        }
        if (checkText(newFatherName[0])) {
          fatherName = newFatherName;
        }
        return getFullName();
      }
      return {
        getName,
        getSurname,
        getFatherName,
        getAge,
        getFullName,
        setName,
        setSurname,
        setFatherName,
        setAge,
        setFullName,
      };
    };
    const a = createPersonClosure("Вася", "Пупкін");
    const b = createPersonClosure("Ганна", "Іванова");
    console.log(a.getName());
    a.setAge(15);
    a.setAge(150); 
    
    b.setFullName("Петрова Ганна Миколаївна");
    console.log(b.getFatherName()); 
}

// createPersonClosureDestruct
  const createPersonClosureDestruct = ({ name, surname, fatherName = '', age = 0 }) => {
    function checkText(char) {
      return !!char.match(/[A-ZА-Я]/);
    }
    function getName() {
      return name;
    }
    function getSurname() {
      return surname;
    }
    function getFatherName() {
      return fatherName;
    }
    function getAge() {
      return age;
    }
    function getFullName() {
      return `${surname} ${name} ${fatherName}`;
    }
    function setName(newName) {
      if (checkText(newName[0])) {
        name = newName;
      }
      return name;
    }
    function setSurname(newSurname) {
      if (checkText(newSurname[0])) {
        surname = newSurname;
      }
      return surname;
    }
    function setFatherName(newFatherName) {
      if (checkText(newFatherName[0])) {
        fatherName = newFatherName;
      }
      return fatherName;
    }
    function setAge(newAge) {
      if (newAge >= 0 && newAge <= 100) {
        age = newAge;
      }
      return age;
    }
    function setFullName(newFullName) {
      const [newSurname, newName, newFatherName] = newFullName.split(" ");
    
      if (checkText(newSurname[0])) {
        surname = newSurname;
      }
      if (checkText(newName[0])) {
        name = newName;
      }
      if (checkText(newFatherName[0])) {
        fatherName = newFatherName;
      }
      return getFullName();
    }
    return {
      getName,
      getSurname,
      getFatherName,
      getAge,
      getFullName,
      setName,
      setSurname,
      setFatherName,
      setAge,
      setFullName,
    };
  };

  const a = createPersonClosureDestruct({ name: 'Вася', surname: 'Пупкін' });
  const b = createPersonClosureDestruct({ name: 'Миколай', age: 75 });
  console.log(a.getName());
  console.log(b.getAge());
  b.setFullName("Петрова Ганна Миколаївна");
  console.log(b.getFullName());

// isSorted
{
    const isSorted = (...numbers) => {
    if (numbers.length < 2) {
        return true;
    }
    for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            return false; 
        }
        if (numbers[i] <= numbers[i - 1]) {
            return false; 
        }
    }
    return true;
    }
    console.log(isSorted(1, 2, 3, 4, 5)); 
    console.log(isSorted(5, 3, 2, 1)); 
}

// Test isSorted
const isSorted = (...numbers) => {
  if (numbers.length < 2) {
    return true;
  }
  let arr = []; 
  for (let i = 0; i < numbers.length; i++) {
    arr.push(numbers[i]); 
  }
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return false;
    }
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSorted(1, 2, 3, 4, 5)); 
console.log(isSorted(5, 3, 2, 1)); 

// personForm
{
  const createPersonClosure = (name, surname) => {
    let fatherName;
    let age;
    function checkText(char) {
      return !!char.match(/[A-ZА-Я]/);
    }
    function getName() {
      return name;
    }
    function getSurname() {
      return surname;
    }
    function getFatherName() {
      return fatherName;
    }
    function getAge() {
      return age;
    }
    function getFullName() {
      return `${surname} ${name} ${fatherName}`;
    }
    function setName(newName) {
      if (checkText(newName[0])) {
        name = newName;
      }
      return name;
    }
    function setSurname(newName) {
      if (checkText(newName[0])) {
        surname = newName;
      }
      return surname;
    }
    function setFatherName(newName) {
      if (checkText(newName[0])) {
        fatherName = newName;
      }
      return fatherName;
    }
    function setAge(newAge) {
      if (newAge >= 0 && newAge <= 100) {
        age = age;
      }
      return age;
    }
    function setFullName(newFullName) {
      const [newSurname, newName, newFatherName] = newFullName.split(" ");
  
      if (checkText(newSurname[0])) {
        surname = newSurname;
      }
      if (checkText(newName[0])) {
        name = newName;
      }
      if (checkText(newFatherName[0])) {
        fatherName = newFatherName;
      }
      return getFullName();
    }
    return {
      getName,
      getSurname,
      getFatherName,
      getAge,
      getFullName,
      setName,
      setSurname,
      setFatherName,
      setAge,
      setFullName,
    };
  };
  function personForm(parent, person) {
    const nameInput = document.createElement('input');
    const surnameInput = document.createElement('input');
    const fatherNameInput = document.createElement('input');
    const ageInput = document.createElement('input');
    const fullNameInput = document.createElement('input');
    
    nameInput.value = person.getName();
    surnameInput.value = person.getSurname();
    fatherNameInput.value = person.getFatherName();
    ageInput.value = person.getAge();
    fullNameInput.value = person.getFullName();
    
    parent.append(nameInput);
    parent.append(surnameInput);
    parent.append(fatherNameInput);
    parent.append(ageInput);
    parent.append(fullNameInput);

    nameInput.oninput = () => {
        person.setName(nameInput.value);
        nameInput.value = person.getName();
        fullNameInput.value = person.getFullName();
    };
    surnameInput.oninput = () => {
        person.setSurname(surnameInput.value);
        surnameInput.value = person.getSurname();
        fullNameInput.value = person.getFullName();
    };
    fatherNameInput.oninput = () => {
        person.setFatherName(fatherNameInput.value);
        fatherNameInput.value = person.getFatherName();
        fullNameInput.value = person.getFullName();
    };
    ageInput.oninput = () => {
        person.setAge(parseInt(ageInput.value));
        ageInput.value = person.getAge();
    };
    fullNameInput.oninput = () => {
        const [newSurname, newName, newFatherName] = fullNameInput.value.split(" ");
        person.setSurname(newSurname);
        person.setName(newName);
        person.setFatherName(newFatherName);
        surnameInput.value = person.getSurname();
        nameInput.value = person.getName();
        fatherNameInput.value = person.getFatherName();
        fullNameInput.value = person.getFullName();
    };
}
const b = createPersonClosure("Ганна", "Іванова");
b.setAge(15);
b.setFullName("Петрова Ганна Миколаївна");
}
