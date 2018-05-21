import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

function userReducer(state = '', action) {
	switch(action.type){
		case 'userUpdate':
			return action.payload;

		default:
			return state;
	}
}

function productReducer(state = [], action) {
	return state;
}

const rootReducer = combineReducers({
	products: productReducer,
	user: userReducer
});

const store = createStore(
	rootReducer,
	{
		products: [{
		name: 'Samsung',
		type: 'TV'
	}],
		user: 'Mehmet'
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
