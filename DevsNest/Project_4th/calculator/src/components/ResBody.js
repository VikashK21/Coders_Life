import React, { Component } from 'react'
import '../App.css'
// import { trigger } from './Bodmas'

export class ResBody extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        console.log("vikash here.");
        return (
            <div className='App'>
                <input type='text' className='resArea' name="Ans" value={ this.props.Ans.value}/>
            </div>

        )
    }
}

export default ResBody;