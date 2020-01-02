import React, { useState } from 'react'

export default function Incrementador() {
    const [count, setCount] = useState(0);
    function incrementar () {
       setCount(count + 1)
    }
    function decrementar() {
        setCount(count -1)
    }
    return (

        <React.Fragment>
            <h1>Contador</h1>
            <h2>{count}</h2>
            <button onClick={incrementar}>Incrementador</button>

            <button onClick={decrementar}>Decrementador</button>
        </React.Fragment>


    )
}