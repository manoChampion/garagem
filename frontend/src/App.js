import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './styles.css';


import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

const App = () => (
  <div className="App">
    <BrowserRouter>
        <div>
            <Header />
            <NavigationBar />
            <Routes />
        </div>
    </BrowserRouter>
  </div>
);

export default App;
