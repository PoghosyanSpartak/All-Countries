import { createStore, combineReducers } from "redux";
import reducer from "./reduc";

const redusers = combineReducers({
    r:reducer
})


export const store = createStore(redusers)

