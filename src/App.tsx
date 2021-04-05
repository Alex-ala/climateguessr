import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header/header';

function App() {
    return (
        <div className="App">
            <Header />

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>



        </div>
    );
}

export default App;
