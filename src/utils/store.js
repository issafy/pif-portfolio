import { createStore } from "redux";

const initialState = {
    darkTheme: false
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DARK_THEME':
            return {...state, darkTheme: action.payload };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;