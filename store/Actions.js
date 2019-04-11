import {DATA_LOADED, INCREASE_COUNTER, DECREASE_COUNTER} from "../constants/ActionTypes";

export function getData() {
    return function(dispatch) {
        return fetch("https://api.alternative.me/v2/listings/")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json.data });
            });
    };
}

export function increaseCounter() {
    return function(dispatch) {
        dispatch({type: INCREASE_COUNTER});
    }
}

export function decreaseCounter() {
    return function(dispatch) {
        dispatch({type: DECREASE_COUNTER});
    }
}