const redux = require('redux');
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//(previousState, action) => newState...
const initialState = {
    loading: true,
    users: [],
    error: ""
}


//Actions...
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}


//Reducers...
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

//Action creator...
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                // res.data is the array of users
                const users = res.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users));
            }).catch((err) => {
                // err.message is the error of descriptions
                dispatch(fetchUsersFailure(err.message));
            });
    }
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers())
// store.dispatch(fetchUsers())
// store.dispatch(fetchUsers())
// unsubscribe();

