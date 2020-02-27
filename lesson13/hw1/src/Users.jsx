import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import User from './User';

const Users = () => {
    return (
        <div className="page__content">
            <h1>Users</h1>
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to="/users/github">Github</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/users/facebook">Facebook</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/users/:userId" component={User} />
                <Route path="/users">
                    <span>Select a user please</span>
                </Route>
            </Switch>
        </div>
            );
        };
        
export default Users;