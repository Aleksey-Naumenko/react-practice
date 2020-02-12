import React, { Component } from 'react';


class ConnectionStatus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: true,
        }
    }

    componentDidMount() {
        window.addEventListener('offline', this.offlineToggler);
        window.addEventListener('online', this.onlineToggler);
    }

    componentWillUnmount() {
        window.removeEventListener('offline', this.offlineToggler);
        window.removeEventListener('online', this.onlineToggler);
 
    }

    offlineToggler = () => {
        this.setState({
            status: false,
        })
    }

    onlineToggler = () => {
        this.setState({
            status: true,
        })
    }

    render() {
       
        return (
            this.state.status ?
                <div className="status">online</div> :
                <div className="status status_offline">offline</div>
        )
    }
}

export default ConnectionStatus;