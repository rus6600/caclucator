import React from 'react'

import '../styles/style.css'
import { Inputs } from './Inputs'
import { Summary } from './Summary'

export const CalcWrapper = () => {
    const [state, setState] = React.useState({
        bill: null,
        rate: null,
        people: null,
    })

    return (
        <div className="wrapper">
            <Inputs state={state} setState={setState} />
            <Summary state={state} setState={setState} />
        </div>
    )
}
