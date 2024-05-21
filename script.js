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

//gql
async function gql(endpoint, query, variables) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    });

    const result = await response.json();

    return result.data;
}

;(async () => {
    const catQuery = `query cats($q: String){
        CategoryFind(query: $q){
        _id name
        }
    }`
    const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql",  catQuery,  {q: "[{}]"})
    console.log(cats) 
    const loginQuery = `query login($login:String, $password:String){
        login(login:$login, password:$password)
    }`
    
    const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery ,{login: "test457", password: "123123"})
    console.log(token)
})()

//jwtDecode
const jwtDecode = (token) => {
    try {
        const parts = token.split('.');
        
        if (parts.length !== 3) {
            return undefined;
        }
        const payload = parts[1];
        const decodedPayload = atob(payload);
        const jsonPayload = JSON.parse(decodedPayload);

        return jsonPayload;
    } catch (e) {
        return undefined;
    }
}
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
console.log(jwtDecode(token)) 

try {
    console.log(jwtDecode())     
    console.log(jwtDecode("дічь"))   
    console.log(jwtDecode("ey.ey.ey"))  
    
    console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором')
}
finally{
    console.log('ДЗ, мабуть, закінчено')
}