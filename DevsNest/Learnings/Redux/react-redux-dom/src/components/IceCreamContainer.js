import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyIceCream, returnIceCream } from '../redux'

function IceCreamContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h1>Number of IceCream - {props.iceCream}</h1>
      <input type="number" name="numOfIceCreams" value={number} onChange={e => setNumber(e.currentTarget.value)} />
      <button onClick={() => props.buyIceCream(number)}>Buy {number} IceCream</button>
      <button onClick={() => props.returnIceCream(number)}>Return IceCream</button>
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    iceCream: state.iceCream.numOfIceCream
  }
}

const mapDispatchToProps = dispatch => {
  return {  
    buyIceCream: number => dispatch(buyIceCream(number)),
    returnIceCream: number => dispatch(returnIceCream(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);