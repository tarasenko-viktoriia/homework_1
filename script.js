//redux
const initialState = {
    Water: {quantity: 100, price: 20},
    Beer: {quantity: 100, price: 50},
    Vodka: {quantity: 100, price: 250},
    Juice: {quantity: 100, price: 80},
    cashier: 40000
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'BUY':
            const { drink, quantity } = action;
            const item = state[drink];
            const totalPrice = item.price * quantity;
            if (item.quantity >= quantity && state.cashier >= totalPrice) {
                return {
                    ...state,
                    [drink]: { ...item, quantity: item.quantity - quantity },
                    cashier: state.cashier - totalPrice
                };
            }
            return state;
        default:
            return state;
    }
}

const store = Redux.createStore(reducer);

document.querySelector('#button').addEventListener('click', function() {
    const drink = document.querySelector('#drinkElement').value;
    const quantity = parseInt(document.querySelector('#quantityInput').value);
    store.dispatch({ type: 'BUY', drink, quantity });
});

store.subscribe(function() {
    const state = store.getState();
    const cash = state.cashier;
    document.title = `Cashier: ${cash}`;
});

console.log(store.getState());

//Додаткове завдання
const factorialRecursion = (num) => {
    if (num ===1) {
        return num;
    }
    const result = factorialRecursion (num - 1);
    return num * result;
};

//або
const factorialRecursion2 = num => num === 1 ? num : num * factorialRecursion2(num - 1);

const factorialWithCache = () => {
    const map = new Map();
    return function fact(num) {
        if (map.has(num)) {
            return map.get(num);
        }
        if (num === 1) {
            return num;
        }
        const result = fact(num - 1);
        map.set(num, num * result); 
        return num * result;
    }
}

const cachedFactorial = factorialWithCache();

console.log(cachedFactorial(120)); 

