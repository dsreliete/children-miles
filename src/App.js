import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Main from './components/MainComponent';

import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';

// const store = ConfigureStore();

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>
    );
}

export default App;
