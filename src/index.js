import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalState from './GlobalState';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GlobalState />, document.getElementById('root'));
serviceWorker.unregister();
