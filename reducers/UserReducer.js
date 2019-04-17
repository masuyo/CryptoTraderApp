export const GET_CURRENCIES_PENDING = "GET_CURRENCIES_PENDING";
export const GET_CURRENCIES_FULFILLED = "GET_CURRENCIES_FULFILLED";
export const GET_CURRENCIES_REJECTED = "GET_CURRENCIES_REJECTED";
export const REFRESH_USERS = "REFRESH_USERS";

const initialState = {
    isLoading: true,
    refresh: false,
    users: [],
    page: 1,
    seed: 1,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCIES_FULFILLED:
            return {
                ...state,
                isLoading: false,
                refresh: false,
                users: state.page === 1 ? action.payload : [...state.users, ...action.payload],
                page: state.page + 1,
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
        case REFRESH_USERS:
            return {
                ...state,
                page: 1,
                seed: state.seed + 1,
                refresh: true,
                isLoading: true,
            };
        default:
            return state;
    }
}

export default userReducer;