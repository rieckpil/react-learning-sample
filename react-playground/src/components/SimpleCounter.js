import React from 'react';

class SimpleCounter extends React.Component {

    state = {
        counterValue: 0
    }

    add = () => {
        this.setState({counterValue: this.state.counterValue + 1});
    }

    substract = () => {
        this.setState({counterValue: this.state.counterValue - 1});
    }

    render() {
        return (
            <div>
                <h3>Simple Counter Component</h3>
                <h4>{this.state.counterValue}</h4>
                <button onClick={this.add}>+</button>
                <button onClick={this.substract}>-</button>
            </div>
        );
    }
}

export default SimpleCounter;