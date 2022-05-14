import React, { Component } from 'react';


export class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 'vikash',
            age: 18
        }
    }

    update = () => {
        this.setState(previous => ({
            ...previous,
            value: 'Mahendra',
            age: previous.age + 2
        }))
        // this.state.value = 'Mahendra'
    }



    render() {
        return (
            <div>
                <p>{console.log(this.props.attri_props)}</p>
                <p>{this.state.value} {this.state.age}</p>
                <button onClick={this.update}>Change it</button>
            </div>
        )
    }
}

export default Header;