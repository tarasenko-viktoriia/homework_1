// Попередні ДЗ
{
    function createPerson(name, surname) {
      return {
        name,
        surname,
        getFullName() { // Тут функція getFullName замикана навколо змінних name і surname
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
{
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
        // Ось замикання:
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
}

//makeProfileTimer
function makeProfileTimer() {
    const startTime = performance.now();
    return function() {
        const endTime = performance.now();
        return endTime - startTime;
    };
}

const timer = makeProfileTimer();
alert('Вимірюємо час роботи цього alert');
alert(timer());

const timer2 = makeProfileTimer();
prompt('');
alert(`Час роботи двох alert та одного prompt: ${timer()}`);
alert(`Час роботи prompt та попереднього alert: ${timer2()}`);

//makeSaver
function makeSaver(func) {
    let result;
    let called = false;
    
    return function() {
        if (!called) {
            result = func();
            called = true;
        }
        return result;
    }
}

let saver = makeSaver(() => Math.random().toFixed(4))
let value1 = saver();          
let value2 = saver();              
alert(`Random: ${value1} === ${value2}`);

let saver2 = makeSaver(() => {
    console.log('saved function called');
    return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random()*6)];
});

let value3 = saver2();
let value4 = saver2();
value3 === value4;

let namePrompt = prompt.bind(window, 'Як тебе звуть?');
let nameSaver = makeSaver(namePrompt);
alert(`Привіт! Prompt ще не було!`);
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);

//myBind
function myBind(func, context, defaultArgs) {
    return function(...args) {
        const boundArgs = defaultArgs.map((arg, index) => {
            return arg !== undefined ? arg : (index < args.length ? args[index] : undefined);
        });
        const filteredArgs = [];
        let defaultIndex = 0;
        let argIndex = 0;
        for (let i = 0; i < defaultArgs.length; i++) {
            if (defaultArgs[i] !== undefined) {
                filteredArgs.push(defaultArgs[i]);
            } else if (args.length > 0) {
                filteredArgs.push(args[argIndex++]);
            }
        }

        return func.apply(context, filteredArgs);
    };
}

let pow5 = myBind(Math.pow, Math, [undefined, 5]); 
let cube = myBind(Math.pow, Math, [undefined, 3]); 

console.log(pow5(2)); // => 32
console.log(pow5(4)); // => 1024
console.log(cube(3)); // => 27

let chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9]);
console.log(chessMin(-1,-5,3,15)); // -5

let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
let someNumber = zeroPrompt("Введіть число");
console.log(someNumber);

const bindedJoiner = myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f']);
console.log(bindedJoiner('a','c','d')); // 'abcdef'
console.log(bindedJoiner('1','2','3')); // '1b23ef' 

