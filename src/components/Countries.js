import React, {useEffect, useState} from 'react'
import Country from './Country'
import axios from "axios";
import CountriesFilter from "./CountriesFilter";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('')
    const maxSize = 10;

    useEffect(() => {
        const dataUrl = `${process.env.REACT_APP_BACKEND_COUNTRY_URL}/`;
        axios.get(dataUrl).then(response => {
            setCountries(response.data.countries)
        })
    }, []);

    const filterChangeHandler = (filter) => {
        setFilter(filter);
    };

    const filteredCountriesList = filter ? countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase())) : [];

    if(filteredCountriesList.length < 1) {
        return (
            <div>
                <CountriesFilter filter={filter} filterChangeHandler={filterChangeHandler} />
            </div>
        )
    }

    if(filteredCountriesList.length > maxSize) {
        return (
            <div>
                <CountriesFilter filter={filter} filterChangeHandler={filterChangeHandler} />
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }

    return (
        <div>
            <CountriesFilter filter={filter} filterChangeHandler={filterChangeHandler} />
            <div>
                {filteredCountriesList.map(country => (
                    <div key={country.country_code}>
                        <Country country={country}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Countries;