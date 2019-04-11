import {INCREASE_COUNTER, DECREASE_COUNTER} from "../constants/ActionTypes";
import {GET_CURRENCIES_PENDING, GET_CURRENCIES_FULFILLED, GET_CURRENCIES_REJECTED} from "../reducer/CurrencyReducer";

export const getData = () => dispatch => {
    dispatch({type: GET_CURRENCIES_PENDING});
    return fetch("https://api.alternative.me/v2/listings/")
        .then(response => response.json())
        .then(json => {
            dispatch({type: GET_CURRENCIES_FULFILLED, payload: json.data});
        })
        .catch(() => (dispatch({type: GET_CURRENCIES_REJECTED})))
};

export const increaseCounter = () => dispatch => dispatch({type: INCREASE_COUNTER});
export const decreaseCounter = () => dispatch => dispatch({type: DECREASE_COUNTER});