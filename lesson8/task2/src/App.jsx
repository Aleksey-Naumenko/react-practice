import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClockVisible: true,
        }
    }
    watchToggler = () => {
        this.setState({
            isClockVisible: !this.state.isClockVisible,
        })
    }

    render() {
        return (
            <>
                <button 
                    className="btn"
                    onClick={this.watchToggler}
                >
                    {this.state.isClockVisible ?
                        'Hide' : 'Show'}
                </button>
                
                {this.state.isClockVisible &&
                <>
                    <Clock location="London" offset={0} />
                    <Clock location="Kyiv" offset={2} />
                    <Clock location="New York" offset={-5} />
                </>
                }
            </>
        );
    }
};

export default App;