//Світлофор
{
    const delay = ms => new Promise(ok => setTimeout(ok, ms));

    async function trafficLight() {
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');

    while (true) {
        greenLight.classList.remove('off');
        await delay(3000); 
        greenLight.classList.add('off');

        yellowLight.classList.remove('off');
        await delay(1000); 
        yellowLight.classList.add('off');

        redLight.classList.remove('off');
        await delay(5000); 
        redLight.classList.add('off');
    }
    }

    trafficLight();
}
//PedestrianTrafficLight
const delay = ms => new Promise(ok => setTimeout(ok, ms));
const domEventPromise = (element, event) => new Promise(ok => element.addEventListener(event, ok, { once: true }));

async function pedestrianTrafficLight({ waitElement, walkElement, button, walkTime, waitTime, cycleTime, buttonCooldown }) {
    while (true) {
        walkElement.classList.add('off');
        waitElement.classList.remove('off');
        button.disabled = false; 
        await delay(waitTime);

        await Promise.race([domEventPromise(button, 'click'), delay(cycleTime)]);

        button.disabled = true; 
        waitElement.classList.add('off');
        walkElement.classList.remove('off');
        await delay(walkTime);

        await delay(buttonCooldown);
    }
}

const waitLight = document.getElementById('wait');
const walkLight = document.getElementById('walk');
const pedestrianButton = document.getElementById('pedestrian-button');

pedestrianTrafficLight({
    waitElement: waitLight,
    walkElement: walkLight,
    button: pedestrianButton,
    walkTime: 5000, 
    waitTime: 5000, 
    cycleTime: 3000, 
    buttonCooldown: 2000 
});
//speedtest
async function speedtest(getPromise, count, parallel = 1) {
    const startTime = Date.now();
    
    let totalPromises = 0;
    let totalDuration = 0;

    for (let i = 0; i < count; i++) {
        const batchStartTime = Date.now();
        const promises = [];

        for (let j = 0; j < parallel; j++) {
            promises.push(getPromise());
            totalPromises++;
        }

        await Promise.all(promises);
        totalDuration += Date.now() - batchStartTime;
    }

    const endTime = Date.now();
    const duration = endTime - startTime;
    const queryDuration = totalDuration / totalPromises;
    const querySpeed = 1 / queryDuration;
    const parallelDuration = duration / (count * parallel);
    const parallelSpeed = 1 / parallelDuration;

    return {
        duration,
        querySpeed,
        queryDuration,
        parallelSpeed,
        parallelDuration
    };
}

const lag = (ms) => new Promise(resolve => setTimeout(resolve, ms));

speedtest(() => lag(1000), 10, 10).then(result => console.log(result));

speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 10, 5).then(result => console.log(result));

//gql
//jwtDecode