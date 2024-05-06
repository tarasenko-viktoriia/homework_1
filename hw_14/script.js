
//SWAPI Links
const getData = async (url) => {
    const res = await fetch(url);
    return res.json();
  };
  
  const swapiLinks = async (url) => {
    const data = await getData(url);
    const keys = Object.keys(data);
  
    for (const key of keys) {
      const value = data[key];
      if (typeof value === "string" && value.includes("api")) {
        try {
          data[key] = await getData(value);
        } catch (error) {
          console.error(`Failed to fetch ${value}:`, error);
        }
      }
      if (Array.isArray(value)) {
        const arr = await Promise.all(value.map(async (item) => {
          if (typeof item === "string" && item.includes("api")) {
            try {
              return await getData(item);
            } catch (error) {
              console.error(`Failed to fetch ${item}:`, error);
              return null;
            }
          } else {
            return item;
          }
        }));
        data[key] = arr.filter(item => item !== null); // Filter out failed requests
      }
    }
  
    return data;
  };
  
  const getLinks = async () => {
    const yodaWithLinks = await swapiLinks("https://swapi.dev/api/people/20/");
    console.log(JSON.stringify(yodaWithLinks, null, 4));
  };
  
  getLinks();
  

// // domEventPromise
function domEventPromise(element, eventName) {
    function executor(resolve) {
        function eventHandler(event) {
            element.removeEventListener(eventName, eventHandler);
            resolve(event);
        }
        
        element.addEventListener(eventName, eventHandler);
    }
    
    return new Promise(executor);
}
const knopka = document.getElementById('knopka'); 

domEventPromise(knopka, 'click')
    .then(e => console.log('event click happens', e));

// //Додаткове
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

setTimeout(() => {
  console.log(3);
}, 0);

const promise = Promise.resolve();
for (let i = 0; i < 3; i++) {
  promise
    .then(() => {
      setTimeout(() => {
        console.log(4);
        setTimeout(() => console.log(5), 0);

        Promise.resolve().then(() => {
          console.log(6);
        });

        promise.then(() => {
          console.log(7);
        });
      }, 0);
    })
    .then(() => {
      console.log(8);
    });
}
console.log(9);
//1 9 8 8 8 2 3 4 6 7 4 6 7 4 6 7 5 5 5
