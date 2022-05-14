import React from 'react';
import { connect } from 'react-redux';
import { buyMango, returnMango } from '../redux';

function MangoCo(props) {
    return (
        <div>
            <h1>Mangoes in the stock - {props.numOfMangoes}</h1>
            <button onClick={props.buyMango}>Buy One</button>
            <button onClick={props.returnMango}>Add One</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfMangoes: state.numOfMangoes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyMango: () => dispatch(buyMango()),
        returnMango: () => dispatch(returnMango())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MangoCo);