import {GET_CURRENCIES_PENDING, GET_CURRENCIES_FULFILLED, GET_CURRENCIES_REJECTED, REFRESH_USERS} from "../reducers/UserReducer";
import {DECREASE_COUNTER, INCREASE_COUNTER} from "../reducers/CounterReducer";

export const getData = (page, seed) => dispatch => {
    dispatch({type: GET_CURRENCIES_PENDING});
    return (
        setTimeout(() => {
            fetch("https://randomuser.me/api/?seed=" + seed + "&page=" + page + "&results=20")
                .then(response => response.json())
                .then(json => {
                    dispatch({type: GET_CURRENCIES_FULFILLED, payload: json.results});
                })
                .catch(() => (dispatch({type: GET_CURRENCIES_REJECTED})))
        }, 1500)
    );
};

export const refreshData = () => dispatch => dispatch({type: REFRESH_USERS});

export const increaseCounter = () => dispatch => dispatch({type: INCREASE_COUNTER});
export const decreaseCounter = () => dispatch => dispatch({type: DECREASE_COUNTER});