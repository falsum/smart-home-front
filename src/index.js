import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
