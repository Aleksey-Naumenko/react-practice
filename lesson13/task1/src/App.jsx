import React from 'react';
import './index.scss';
import Home from './Home';
import Products from './Products';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div className="page">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/contacts">
                        <Contacts />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;