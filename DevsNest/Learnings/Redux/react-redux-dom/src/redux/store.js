import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

import logger from "redux-logger";
//This logs all the detail what is happening in the bacground...

import { composeWithDevTools } from "redux-devtools-extension";
//This is used to help show the reactions of the initial state in the extention added by the googl...

// import cakeReducer from "./cake/cakeReducer";


// const store = createStore(cakeReducer)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store;