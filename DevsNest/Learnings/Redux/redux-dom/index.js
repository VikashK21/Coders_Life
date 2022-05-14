const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// console.log('From index.js.');

//Action...
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

//(previousState, action) => newState.

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 10
// }

// Cake state
const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreams = {
    numOfIcecreams: 10
}

//Reducer...
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIcecreams: state.numOfIcecreams - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const icecreamReducer = (state = initialIcecreams, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}


//Creating Store...
// ##conmbineReducer is used to conbine the multiples reducers...
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
// ##createStore is used to work with the single reducer...
// //const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleWare(logger));
// getState is used to bring the data from the state.
console.log('Initial state', store.getState());
// subscribe is used to trigger the reducer function...
store.subscribe(() => { console.log('step by step\n', store.getState()); })
// dispatch is used to update the state...
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
// unsubscribe()
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


