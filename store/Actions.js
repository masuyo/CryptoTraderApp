import {DATA_LOADED} from "../constants/ActionTypes";

export function getData() {
    return function(dispatch) {
        return fetch("https://api.alternative.me/v2/listings/")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json.data });
            });
    };
}