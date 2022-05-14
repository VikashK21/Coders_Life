import React, { Component, } from 'react'
import ResBody from './ResBody';
import "./CalBody.css"

class CalBody extends Component {
  constructor() {
    super()
    this.state = {
      value: "0", // this is for the user view.
      equations: [], // could have done without this also but for the furthere updation, this was established.
      inputs: "0",  // to support the above one this was introduced.
      sign: true, // it helps to seperate the sign and the values.
      replacement: false
    }
  }

  numberHandling = (number) => {
    if (number === "=") {
      console.log('this is the chor.');
      console.log(this.state);
      const num1 = Number(this.state.equations[0]);
      const num2 = Number(this.state.equations[2])
      let eq = `${num1}${this.state.equations[1]}${num2}`
      const ans = eval(eq);
      this.setState({ value: ans, inputs: ans, equations: [] })
    }
    else {
      this.setState(prev => ({ ...prev, value: prev.value + number, replacement: false }))
      this.setState(prevs => {
        if (prevs.sign) {
          return ({
            ...prevs,
            inputs: prevs.inputs + number
          })
        }
        else {
          return ({
            ...prevs,
            sign: true,
            inputs: "0",
            replacement: true
          })
        }
      })

    }
  }


  operationHandling = (eq) => {
    const cEq = this.state.equations
    if (this.state.replacement) {
      // alert(cEq)
      // alert(cEq!==undefined)
      cEq.pop();
      this.setState(p => ({
        ...p,
        value: p.value.slice(0, p.value.length - 1)
      }))
    }
    else {
      cEq.push(this.state.inputs)
    }

    cEq.push(eq)
    this.setState(prev => ({
      ...prev,
      equations: cEq,
      sign: false
    }))
    this.numberHandling(eq);
  }

  delHandling = () => {
    this.setState({ value: "0", equations: [], inputs: "0", sign: true })
  }

  ans = (finalAns) => {
    this.setState({
      value: finalAns
    })
  }

  render() {
    return (
      <>
        <ResBody Ans={this.state} />
        <div className='box'>
          <button onClick={this.delHandling}>Clear</button>
          <button>Del</button>

          <button>%</button>

          <button onClick={() => this.operationHandling('/')}>÷</button>
          <button onClick={() => this.numberHandling(7)}>7</button>
          <button onClick={() => this.numberHandling(8)}>8</button>
          <button onClick={() => this.numberHandling(9)}>9</button>

          <button onClick={() => this.operationHandling('*')}>x</button>
          <button onClick={() => this.numberHandling(4)}>4</button>
          <button onClick={() => this.numberHandling(5)}>5</button>
          <button onClick={() => this.numberHandling(6)}>6</button>

          <button onClick={() => this.operationHandling('-')}> -</button>
          <button onClick={() => this.numberHandling(1)}>1</button>
          <button onClick={() => this.numberHandling(2)}>2</button>
          <button onClick={() => this.numberHandling(3)}>3</button>

          <button onClick={() => this.operationHandling('+')}> +</button>
          <button onClick={() => this.numberHandling(0)}>0</button>
          <button onClick={() => this.numberHandling('.')}>.</button>
          <button style={{width: '7.5rem', marginLeft: '2px', marginTop: '2px'}} onClick={() => this.operationHandling('=')}> =</button>

        </div>
        <div>

        </div>
        <div>

        </div>
        <div>
        </div>


      </>
    )
  }
}

export default CalBody;
