export const GET_CURRENCIES_PENDING = "GET_CURRENCIES_PENDING";
export const GET_CURRENCIES_FULFILLED = "GET_CURRENCIES_FULFILLED";
export const GET_CURRENCIES_REJECTED = "GET_CURRENCIES_REJECTED";
export const REFRESH_USERS = "REFRESH_USERS";

const initialState = {
    isLoading: true,
    users: [],
    refresh: false,
    offset: 0,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCIES_FULFILLED:
            return {
                ...state,
                isLoading: false,
                refresh: false,
                offset: state.offset + 20,
                users: [...state.users, ...action.payload],
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
            console.log("REFRESH!4444", state.refresh);
            return {
                ...state,
                offset: 0,
                refresh: true,
                isLoading: true,
                users: [],
            };
        default:
            return state;
    }
}

export default userReducer;