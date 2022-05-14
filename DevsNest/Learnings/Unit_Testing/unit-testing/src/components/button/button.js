import React from 'react'

function button({label}) {
  return (
    <div data-testid="button">
        {label}
    </div>
  )
}

export default button;