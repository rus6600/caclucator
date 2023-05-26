import React from 'react'

export const Summary = ({ reset, tipAmount, total, resetEnabled }) => {
    return (
        <div className="summary">
            <div className="summary-info">
                <div className="summary-text">
                    <p>Tip Amount</p>
                    <p>/ person</p>
                </div>
                <input readOnly value={`$${tipAmount}`} />
            </div>
            <div className="summary-info">
                <div className="summary-text">
                    <p>Total</p>
                    <p>/ person</p>
                </div>
                <input readOnly value={`$${total}`} />
            </div>
            <button
                className={`btn ${
                    resetEnabled ? 'btn-reset ' : 'btn-disabled'
                }`}
                onClick={reset}
            >
                RESET
            </button>
        </div>
    )
}
