import {combineReducers} from "redux";
import counterReducer from "./CounterReducer";
import currencyReducer from "./CurrencyReducer";

export default combineReducers({
    counter: counterReducer,
    currency: currencyReducer
})