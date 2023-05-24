import React from 'react'

export const Inputs = ({
    rates,
    state: { bill, rate, customRate, people, error },
    inputHandler,
}) => {
    return (
        <div className="inputs">
            <div className="input-wrapper">
                <label className="label-text">Bill</label>
                <label className="icon-dollar" htmlFor="bill">
                    <input
                        className="input border-primary"
                        type="text"
                        id="bill"
                        placeholder="0"
                        value={bill}
                        onChange={(e) =>
                            inputHandler({
                                bill: e.target.value,
                            })
                        }
                    />
                </label>
            </div>
            <div className="input-wrapper">
                <label className="label-text">Select Tip %</label>
                <div className="percents-grid">
                    {rates.map((item) => (
                        <button
                            key={item}
                            className={`btn ${
                                rate === item ? 'btn-selected' : 'btn-percent'
                            }`}
                            onClick={() =>
                                inputHandler({ rate: item, customRate: '' })
                            }
                        >{`${item}%`}</button>
                    ))}
                    <input
                        className="input input-custom border-primary"
                        type="number"
                        placeholder="Custom"
                        value={customRate}
                        onChange={(e) =>
                            inputHandler({
                                rate: '',
                                customRate: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="input-wrapper">
                <div className="label-wrapper">
                    <label className="label-text">Number of People</label>
                    {error && (
                        <label className="label-text label-warning">
                            Can't be zero
                        </label>
                    )}
                </div>
                <label className="icon-person" htmlFor="people">
                    <input
                        className={`input ${
                            error ? 'border-warning' : 'border-primary'
                        } `}
                        type="number"
                        id="people"
                        placeholder="0"
                        value={people}
                        onChange={(e) =>
                            inputHandler({
                                people: e.target.value,
                            })
                        }
                    />
                </label>
            </div>
        </div>
    )
}
