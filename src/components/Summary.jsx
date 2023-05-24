import React from 'react'

export const Summary = ({ reset, tipAmount, total }) => {
    return (
        <div className="summary">
            <div className="summary-info">
                <h3>Tip Amount</h3>
                <p>/ person</p>
                <h1>${tipAmount}</h1>
            </div>
            <div className="summary-info">
                <h3>Total</h3>
                <p>/ person</p>
                <h1>${total}</h1>
            </div>
            <button
                className={`btn btn-reset ${!total && 'btn-disabled'}`}
                onClick={reset}
            >
                RESET
            </button>
        </div>
    )
}
