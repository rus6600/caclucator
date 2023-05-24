import React from 'react'

export const Summary = ({ state: { bill, rate, people }, setState }) => {
    const tip = ((bill / people) * rate) / 100
    const tipUnRounded = Math.trunc(tip * 100) / 100
    const reset = () => {
        setState({
            bill: null,
            rate: null,
            people: null,
        })
    }
    return (
        <div className="summary">
            <div className="summary-info">
                <h3>Tip Amount</h3>
                <p>/ person</p>
                <h1>${tipUnRounded}</h1>
            </div>
            <div className="summary-info">
                <h3>Total</h3>
                <p>/ person</p>
                <h1>{(bill / people + tip).toFixed(2)}</h1>
            </div>
            <button className="btn btn-reset" onClick={() => reset()}>
                RESET
            </button>
        </div>
    )
}
