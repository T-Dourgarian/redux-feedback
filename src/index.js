import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const formReducer = (state={}, action) => {
    if(action.type === "SET_FEELING") {
        return {...state,feeling:action.payload};
    } else if (action.type === "SET_UNDERSTANDING") {
        return {...state,understanding:action.payload};
    } else if (action.type === "SET_SUPPORT") {
        return {...state,support:action.payload};
    } else if (action.type === "SET_COMMENTS") {
        return {...state,comments:action.payload}
    }
    return state;
}

const adminDataReducer = (state=[],action) => {
    if(action.type === "SET_ADMIN_DATA") {
        return [...action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        formReducer,
        adminDataReducer
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
