import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import{legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import searchReducer from './store/search/reducer';
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(<React.StrictMode>
        <App/>
</React.StrictMode>, document.getElementById('root'));
