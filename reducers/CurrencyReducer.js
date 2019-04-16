export const GET_CURRENCIES_PENDING = "GET_CURRENCIES_PENDING";
export const GET_CURRENCIES_FULFILLED = "GET_CURRENCIES_FULFILLED";
export const GET_CURRENCIES_REJECTED = "GET_CURRENCIES_REJECTED";
export const REFRESH_CURRENCIES = "REFRESH_CURRENCIES";

const initialState = {
    isLoading: true,
    currencies: [],
    refresh: false,
    offset: 0,
};

function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCIES_FULFILLED:
            return {
                ...state,
                isLoading: false,
                refresh: false,
                offset: state.offset + 20,
                currencies: [...state.currencies, ...action.payload],
            };
        case GET_CURRENCIES_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_CURRENCIES_REJECTED:
            return {
                ...state,
                isLoading: false,
            };
        case REFRESH_CURRENCIES:
            console.log("REFRESH!4444", state.refresh);
            return {
                ...state,
                offset: 0,
                refresh: !state.refresh,
            };
        default:
            return state;
    }
}

export default currencyReducer;