import {GET_CURRENCIES_PENDING, GET_CURRENCIES_FULFILLED, GET_CURRENCIES_REJECTED, REFRESH_CURRENCIES} from "../reducers/UserReducer";
import {DECREASE_COUNTER, INCREASE_COUNTER} from "../reducers/CounterReducer";

export const getData = (page, seed) => dispatch => {
    dispatch({type: GET_CURRENCIES_PENDING});
    return fetch("https://randomuser.me/api/?seed=${seed}&page=${page}&results=20")
        .then(response => response.json())
        .then(json => {
            console.log("results!!!!", json.results);
            dispatch({type: GET_CURRENCIES_FULFILLED, payload: json.results});
        })
        .catch(() => (dispatch({type: GET_CURRENCIES_REJECTED})))
};

export const refreshData = () => dispatch => dispatch({type: REFRESH_CURRENCIES});

export const increaseCounter = () => dispatch => dispatch({type: INCREASE_COUNTER});
export const decreaseCounter = () => dispatch => dispatch({type: DECREASE_COUNTER});