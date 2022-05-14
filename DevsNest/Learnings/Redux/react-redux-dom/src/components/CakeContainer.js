import React from 'react';
import { connect } from 'react-redux';
import { buyCake, returnCake } from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={props.returnCake}>Return Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCake: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        returnCake: () => dispatch(returnCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);