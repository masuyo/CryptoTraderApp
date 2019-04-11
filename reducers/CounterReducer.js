export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";

const initialState = {
    counter: 0
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            console.log(state.counter);
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE_COUNTER:
            console.log(state.counter);
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;

    }
}

export default counterReducer;