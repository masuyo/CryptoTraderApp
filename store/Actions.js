import {GET_CURRENCIES_PENDING, GET_CURRENCIES_FULFILLED, GET_CURRENCIES_REJECTED, REFRESH_CURRENCIES} from "../reducers/CurrencyReducer";
import {DECREASE_COUNTER, INCREASE_COUNTER} from "../reducers/CounterReducer";

export const getData = () => dispatch => {
    dispatch({type: GET_CURRENCIES_PENDING});
    return fetch("https://api.alternative.me/v2/listings/")
        .then(response => response.json())
        .then(json => {
            dispatch({type: GET_CURRENCIES_FULFILLED, payload: json.data});
        })
        .catch(() => (dispatch({type: GET_CURRENCIES_REJECTED})))
};

export const refreshData = () => dispatch => dispatch({type: REFRESH_CURRENCIES});

export const increaseCounter = () => dispatch => dispatch({type: INCREASE_COUNTER});
export const decreaseCounter = () => dispatch => dispatch({type: DECREASE_COUNTER});