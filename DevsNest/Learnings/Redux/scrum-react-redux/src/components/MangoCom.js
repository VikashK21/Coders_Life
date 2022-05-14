import React from 'react';
import { connect } from 'react-redux';
import { buyMango, sellMango } from '../redux';

function MangoCom(props) {
  return (
    <div>
        <h1>Number of Mangoes in the Scrum Stock - {props.numOfMangoes}</h1>
        <button onClick={props.buyMango} >Buy One</button>
        <button onClick={props.sellMango}>Sell One</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfMangoes: state.numOfMangoes
  }
}

const dispatchToProps = dispatch => {
  return {
    buyMango: () => dispatch(buyMango()),
    sellMango: () => dispatch(sellMango())
  }
}

export default connect(mapStateToProps, dispatchToProps)(MangoCom);