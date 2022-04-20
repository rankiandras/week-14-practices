import React, { useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState('This is the default state of a function component')
    const [key2, setKey2] = useState(0)

  return (
    <div>
        {key1}
        <button onClick={() => setKey1('Clicked')}>Click me</button><br />
        {key2}
        <button onClick={() => setKey2(1)}>Click me</button>
    </div>
    
  )
}

export default ButtonWithHooks