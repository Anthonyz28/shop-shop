import { createStore } from 'redux';
import reducer from './reducers.js';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENSION_()
);

export default store;