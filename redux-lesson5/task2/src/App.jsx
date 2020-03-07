import React from 'react';
import { Provider } from 'react-redux';
import TransferList from './options/TransferList';
import store from './store';

const App = () => {

    return (
        <Provider store={store}>
            <TransferList />
        </Provider>
    );
}

export default App;