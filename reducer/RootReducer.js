import { DATA_LOADED, INCREASE_COUNTER, DECREASE_COUNTER } from "../constants/ActionTypes";

const initialState = {
    isLoading: true,
    currencies: [],
    counter: 0
};

function rootReducer(state = initialState, action) {
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            isLoading: false,
            currencies: state.currencies.concat(action.payload)
        });
    }
    if (action.type === INCREASE_COUNTER) {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === DECREASE_COUNTER) {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

export default rootReducer;