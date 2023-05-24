import React from 'react';


export const Inputs = () => {
    return (
        <div className='inputs'>
            <h2>Bill</h2>
            <label className='icon-dollar' htmlFor="bill">
                <input type="number" id='bill'/>

            </label>
            <h2>Select Tip %</h2>
            <div className="percents-grid">
                <button className="btn btn-percent">5%</button>
                <button className="btn btn-percent">10%</button>
                <button className="btn btn-percent">15%</button>
                <button className="btn btn-percent">25%</button>
                <button className="btn btn-percent">50%</button>
                <button className="btn btn-percent">CUSTOM</button>
            </div>
            <h2>Number of People</h2>
            <label className='icon-person' htmlFor="people">

                <input type="number" id='people'/>
            </label>


        </div>
    )
}