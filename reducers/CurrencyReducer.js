export const GET_CURRENCIES_PENDING = "GET_CURRENCIES_PENDING";
export const GET_CURRENCIES_FULFILLED = "GET_CURRENCIES_FULFILLED";
export const GET_CURRENCIES_REJECTED = "GET_CURRENCIES_REJECTED";
export const REFRESH_CURRENCIES = "REFRESH_CURRENCIES";

const initialState = {
    isLoading: true,
    currencies: [],
    refresh: false
};

function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCIES_FULFILLED:
            return {
                ...state,
                isLoading: false,
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
            console.log("REFRESH!");
            return {
                ...state,
                refresh: !state.refresh,
            };
        default:
            return state;
    }
}

export default currencyReducer;