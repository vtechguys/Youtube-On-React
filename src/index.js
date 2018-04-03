import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer';

const store = createStore(rootReducer); 





ReactDOM.render(<Provider store={store}><App /></Provider>,document.querySelector("#root"));

