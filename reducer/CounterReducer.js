import { INCREASE_COUNTER, DECREASE_COUNTER } from "../constants/ActionTypes";

const initialState = {
    counter: 0
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;

    }
}

export default counterReducer;