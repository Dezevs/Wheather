import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, combineReducers, createStore} from "redux";
import weatherReducer from "./redux/weatherReducer";
import thunk from "redux-thunk";


let store = createStore(combineReducers({weather:weatherReducer}),applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
