// Get HTML elements
let showReturn = document.getElementById('Show_Num');
let plus = document.getElementById('plus');
let minus = document.getElementById('mines');
let refresh = document.getElementById('refresh');

// Initial state
let initialState = 0;

// Reducer function
let counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
        case 'RESET':
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
    store.dispatch({ type: 'PLUS' });
    updateUI();
});

minus.addEventListener('click', () => {
    store.dispatch({ type: 'MINUS' });
    updateUI();
});

refresh.addEventListener('click', () => {
    store.dispatch({ type: 'RESET' });
    updateUI();
});
