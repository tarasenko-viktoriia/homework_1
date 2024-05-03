
//SWAPI Links
async function swapiLinks(url) {
    async function fetchSwapiData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

    const data = await fetchSwapiData(url);

    async function resolveLinks(obj) {
        const promises = [];

        for (const key in obj) {
            if (key in obj) {
                if (Array.isArray(obj[key])) {
                    const promiseArray = obj[key].map(link => resolveLinks(link));
                    const resolvedArray = await Promise.all(promiseArray);
                    obj[key] = resolvedArray;
                } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    const resolvedObj = await resolveLinks(obj[key]);
                    obj[key] = resolvedObj;
                }
            }
        }

        if (typeof obj === 'string' && obj.startsWith('https://swapi.dev/api/')) {
            const promise = fetchSwapiData(obj);
            promises.push(promise.then(data => {
                obj = data;
            }));
            await Promise.all(promises);
        }

        return obj;
    }

    return resolveLinks(data);
}

swapiLinks("https://swapi.dev/api/people/20/")
    .then(yodaWithLinks => console.log(JSON.stringify(yodaWithLinks, null, 4)))
    .catch(error => console.error("Error:", error));


// domEventPromise
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

//Додаткове
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

// //1 9 8 2 3 4 6 7 4 6 7 4 6 7 5
