import React from 'react';
import './index.scss';
import User from './User';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="page">
            <BrowserRouter>
                <div className="page__content">
                    <ul className="navigation">
                        <li className="navigation__item">
                            <Link to="/users/github">Github</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/users/facebook">Facebook</Link>
                        </li>
                    </ul>
                    <Switch>
                        
                        <Route exact path="/">
                            <span>Select a user please</span>
                        </Route>
                        <Route path="/users/:userId">
                            <User />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;