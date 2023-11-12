import { Pluse,Mines,Refresh } from "./ActionsType/index.js";


let showReturn = document.getElementById('Show_Num');
let plus = document.getElementById('plus');
let minus = document.getElementById('mines');
let refresh = document.getElementById('refresh');

// Initial state
let initialState = 0;

// Reducer function
let counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Pluse:
            return state + 1;
        case Mines:
            return state - 1;
        case Refresh:
            return initialState;
        default:
            return state;
    }
};

// Redux store
let store = Redux.createStore(counterReducer);

// Function to update the UI
let updateUI = () => {
    showReturn.innerHTML = store.getState().toString();
};

// Initial UI update
updateUI();

// Event listeners for buttons
plus.addEventListener('click', () => {
    store.dispatch({ type: Pluse });
    updateUI();
});

minus.addEventListener('click', () => {
    store.dispatch({ type: Mines });
    updateUI();
});

refresh.addEventListener('click', () => {
    store.dispatch({ type: Refresh });
    updateUI();
});
