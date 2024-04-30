import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
  return (
    <div>
        {/* <button onClick={() => console.log('Button Clicked')}>Click</button> */}
        {/* If we add paranthesis than it will become the funcrtion call not the function, but to make it work correctly it should be the function */}
        {/* <button onClick={clickHandler()}>Click</button> */}
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick