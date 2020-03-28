import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from './history';
import './App.css';

import Main from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <div className="App">
                    <Main />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
