import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if(module.hot) {
    module.hot.accept('./App', () => {
        const App = require('./App').default;
        ReactDOM.render(<App />, document.getElementById('root'));
    });
}

ReactDOM.render(<App />, document.getElementById('root'));
