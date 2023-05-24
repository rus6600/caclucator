import React from 'react'

import '../styles/style.css'
import { Inputs } from './Inputs'
import { Summary } from './Summary'

export const CalcWrapper = () => {
    const rates = [5, 10, 15, 25, 50]
    const [state, setState] = React.useState({
        error: false,
        bill: '',
        rate: '',
        customRate: '',
        people: '',
    })

    const getResultSums = () => {
        const { bill, people, rate, customRate, error } = state
        const tip = ((bill / people) * (rate || customRate)) / 100
        const tipAmount = Math.trunc(tip * 100) / 100
        const total = (bill / people + tip).toFixed(2)
        const resetEnabled = bill || people || rate || customRate
        if (bill && parseInt(people) && (rate || customRate) && !error) {
            return {
                tipAmount,
                total,
                resetEnabled,
            }
        }
        return {
            tipAmount: 0,
            total: 0,
            resetEnabled,
        }
    }

    const inputHandler = (val) => {
        if (
            val.people === '0' ||
            (val.people && val.people.charAt(0) === '0')
        ) {
            setState((prevState) => {
                return {
                    ...prevState,
                    error: true,
                    people: '0',
                }
            })
        } else {
            setState((prevState) => {
                return {
                    ...prevState,
                    ...val,
                    error: false,
                }
            })
        }
    }

    const reset = () => {
        setState((prevState) => {
            return {
                ...prevState,
                error: false,
                bill: '',
                rate: '',
                customRate: '',
                people: '',
            }
        })
    }

    return (
        <div className="wrapper">
            <Inputs rates={rates} state={state} inputHandler={inputHandler} />
            <Summary reset={reset} {...getResultSums()} />
        </div>
    )
}
