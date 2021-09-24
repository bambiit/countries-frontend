import React, {useEffect, useState} from 'react'
import {useRouteMatch} from 'react-router-dom'
import axios from "axios";


const Country = (props) => {

    const [country, setCountry] = useState([]);
    const match = useRouteMatch('/country/:name');

    useEffect(() => {
        if (match) {
            const dataUrl = `${process.env.REACT_APP_BACKEND_COUNTRY_URL}/${match.params.name}`;
            axios.get(dataUrl).then(response => {
                setCountry(response.data);
            })
        } else {
            setCountry(props.country);
        }
    }, [match, props.country]);


    if (!country) {
        return (
            <div></div>
        )
    }

    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital {country.capital}</p>
            <p>Population {country.population}</p>
            <img alt={country.name + 'flag'} src={country.flag_file_url}/>
        </div>
    )
}

export default Country;