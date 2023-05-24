import React from 'react'

export const Inputs = ({ state: { bill, rate, people }, setState }) => {
    const rates = [5, 10, 15, 25, 50]
    const inputHandler = (val) => {
        setState((prev) => {
            return {
                ...prev,
                ...val,
            }
        })
    }

    return (
        <div className="inputs">
            <div className="inputs-items">
                <h2>Bill</h2>
                <label className="icon-dollar" htmlFor="bill">
                    <input
                        className="input"
                        type="number"
                        id="bill"
                        value={bill}
                        onChange={(e) => inputHandler({ bill: e.target.value })}
                    />
                </label>{' '}
            </div>
            <div className="inputs-items">
                <h2>Select Tip %</h2>
                <div className="percents-grid">
                    {rates.map((rate) => (
                        <button
                            key={rate}
                            className="btn btn-percent"
                            onClick={() => inputHandler({ rate })}
                        >{`${rate}%`}</button>
                    ))}
                    <input
                        className="input input-custom"
                        type="number"
                        placeholder="Custom"
                        onChange={(e) => inputHandler({ rate: e.target.value })}
                    />
                </div>
            </div>
            <div className="inputs-items">
                <h2>Number of People</h2>
                <label className="icon-person" htmlFor="people">
                    <input
                        className="input"
                        type="number"
                        id="people"
                        value={people}
                        onChange={(e) =>
                            inputHandler({ people: e.target.value })
                        }
                    />
                </label>
            </div>
        </div>
    )
}
