import React, { Component } from 'react';

import Dialog from './Dialog';

class App extends Component {
    state = {
        isOpen: false,
    }

    closeHandler = () => {
        this.setState({
            isOpen: false,
        })
    }

    openHandler = () => {
        this.setState({
            isOpen: true,
        })
    }

    render() {
        return (
            <div className="app">
                <button 
                    className="btn"
                    onClick={this.openHandler}>
                    Show dialog</button>
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={this.closeHandler}
                    title="some title">
                    <p>Use immutable array methods to work with 
                        data. It will help to avoid bugs</p>
                </Dialog>
            </div>
        )
    }
}

export default App;