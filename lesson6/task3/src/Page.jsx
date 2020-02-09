import React, { Component } from 'react';
import './index.scss';
import Message from './Message';


const text = 'Hello, world!';
const text1 = 'Another exciting text.';

class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: null,
        }
    }

    setText = text => {
        this.setState({
            text: text,
        })
    }


    render() {
        return (
            <div className="page">
                <Message text={this.state.text}/>
                <div className="actions">
                    <button className="btn" onClick={() => this.setText(text)}>Text 1</button>
                    <button className="btn" onClick={() => this.setText(text1)}>Text 2</button>
                    <button className="btn" onClick={() => this.setText('')}>Clear</button>
                </div>
            </div>
        )
    }
}

export default Page;


