import { Component } from 'react';

export default class ComDidUpdate extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            count: 0,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component-did-update", prevState.count, this.state.count);
        // Preventing an infinite loop by checking if the count has actually changed
        if (this.state.count < 10 && prevState.count !== this.state.count) {
            this.setState({ count: this.state.count + 1 });
        }
    }

    render() {
        console.log('render');
        return (
            <div>
            <h1>----------------ComDidUdate------------------</h1>
                <h1>componentDidUpdate {this.state.count}</h1>
                <button onClick={() => this.setState({ count: 1 })}>Update Count</button>
            </div>
        );
    }
}
