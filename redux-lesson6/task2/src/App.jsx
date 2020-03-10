import React from 'react';
import { Provider } from 'react-redux';
import UserInfo from './users/UserInfo';
import SearchField from './users/SearchField';
import store from './store';

const App = () => {

    return (
        <div className="page">
            <Provider store={store}>
                <UserInfo />
                <SearchField />
            </Provider>
        </div>
    );
}

export default App;

