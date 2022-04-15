import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { mainPageReducer } from "./mainPageReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    mainPageReducer: mainPageReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));