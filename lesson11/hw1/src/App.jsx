import React, { Component } from 'react';

import Expand from './Expand';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Expand title="some title">
                    <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a
                        class.</p>
                </Expand>
            </div>
        )
    }
}

export default App;