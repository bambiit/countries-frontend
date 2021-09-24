import React from 'react'

const CountriesFilter = ({filter, filterChangeHandler}) => {

    const countriesFilterChangeHandler = (event) => {
        filterChangeHandler(event.target.value)
    }

    return (
        <div>
            find countries <input onChange={countriesFilterChangeHandler} value={filter} />
        </div>
    )
}

export default CountriesFilter;