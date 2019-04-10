import { DATA_LOADED } from "../constants/ActionTypes";

const initialState = {
    isLoading: true,
    currencies: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            isLoading: false,
            currencies: state.currencies.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;