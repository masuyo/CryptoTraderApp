import {GET_CURRENCIES_PENDING, GET_CURRENCIES_FULFILLED, GET_CURRENCIES_REJECTED, REFRESH_CURRENCIES} from "../reducers/CurrencyReducer";
import {DECREASE_COUNTER, INCREASE_COUNTER} from "../reducers/CounterReducer";

export const getData = (offset) => dispatch => {
    dispatch({type: GET_CURRENCIES_PENDING});
    return fetch("https://api.alternative.me/v2/ticker/?limit=20&start=" + offset + "&sort=id")
        .then(response => response.json())
        .then(json => {
            console.log("JSON FROM ACTION",json.data);
            console.log("OFFSET",offset);
            let obj = Object.values(json.data);
            let currencies = Object.values(obj);
            dispatch({type: GET_CURRENCIES_FULFILLED, payload: currencies});
            console.log("OFFSET1",offset);
        })
        .catch(() => (dispatch({type: GET_CURRENCIES_REJECTED})))
};

export const refreshData = () => dispatch => dispatch({type: REFRESH_CURRENCIES});

export const increaseCounter = () => dispatch => dispatch({type: INCREASE_COUNTER});
export const decreaseCounter = () => dispatch => dispatch({type: DECREASE_COUNTER});