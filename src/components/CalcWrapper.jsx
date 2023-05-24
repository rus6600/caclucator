import React from 'react';

import '../styles/style.css'
import {Inputs} from "./Inputs";
import {Summary} from "./Summary";

export const CalcWrapper = () => {



    return (
        <div className='wrapper'>
            <Inputs/>
            <Summary/>
        </div>
    )
}