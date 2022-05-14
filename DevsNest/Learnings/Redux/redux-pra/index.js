const redux = require('redux');
const createStore = redux.createStore;
const reduxLogger = require('redux-logger');
const middleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();

const BUY_MANGO = "BUY_MANGO";
const payment = (require('readline-sync').questionInt('Enter the price: '))

const buyMango = () => {
    return {
        type: BUY_MANGO,
        info: "You can taste it!",
        rate: 15
    }
}

const mangoStore = {
    numOfMangoes: 50
}

const reducer = (state = mangoStore, action) => {
    switch(action.type) {
        case BUY_MANGO: return {
            ...state,
            numOfMangoes: state.numOfMangoes - 1
        }
    }
}

const store = createStore(reducer, middleware(logger));
store.dispatch(buyMango())