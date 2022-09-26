import React, { useState } from 'react'

function CounterExample(){
    const [count, setCount] =  useState(0)

    return (
        <div>
            <h1>
                {count}
            </h1>
            <h1 onClick={( => setCount())}>
                Plus
            </h1>
        </div>
    )
}

export default class CounterExample