import React, { useState } from 'react'

function TimeComponent() {

    const [count, setCount] = useState(0);
    
    // const setTime = setInterval(start, 1000);
    const time = setInterval(start, 1000)
    function start () {
      setCount(pre => pre+1)
    }

    function stop () {
      clearInterval(time)
    }
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={() => start()}>start</button>
        <button onClick={() => start()}>stop</button>
    </div>
  )
}

export default TimeComponent