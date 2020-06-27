import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({ countrySearchResults, countrySearch, setCountrySearch }) => {
    const api_key = process.env.REACT_APP_API_KEY

    const [ weather, setWeather ] = useState()

    const countriesMapped = countrySearchResults.map(country => (
        <span key={country.numericCode}>{country.name}</span>
    ))
    const countryCapitalFilter = countrySearchResults.filter(country =>
        country.capital)

    const countryCapitalMap = countrySearchResults.map(country => (
        <span key={country.numericCode}>{country.capital}</span>
      ))
    const countryPopulation = countrySearchResults.map(country => (
        <span key={country.numericCode}>{country.population}</span>
    ))
    const countryLanguages = countrySearchResults.map(country => (
        <ul key={country.numericCode}>
            {country.languages.map(language => 
                <li key={language.iso639_1}>{language.name}</li>
            )}
        </ul>    
    )) 
    const countryFlag = countrySearchResults.map(country => (
        <img key={country.numericCode} src={country.flag} alt="Country Flag" width="100" height="100" />
    ))
    
    useEffect(() => {
        console.log('effect')
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${countryCapitalFilter}`)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
        })
    }, [])

    //const temperature = weather.current.temperature
    //console.log(temperature)

    if (countriesMapped.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    if (countriesMapped.length > 1) {
        return (
            countrySearchResults.map(country => (
                <div key={country.numericCode}>
                    {country.name}
                    <button onClick={() => setCountrySearch(country.name.toLowerCase())}>show</button>
                </div>    
            )) 
        )
    }
    if (countrySearch === countrySearchResults.filter(country => country.name)
        || countriesMapped.length === 1) {
        return (
            <div>
                <h2>{countriesMapped}</h2>
                <div>capital {countryCapitalMap}</div>
                <div>population {countryPopulation}</div>
                <h3>languages</h3>
                <div>{countryLanguages}</div>
                <div>{countryFlag}</div>
                <h3>Weather in {countriesMapped}</h3>
                <div>temperature: Celcius</div>  
            </div>
        )    
    }
    else {
        return (
            <div>No results</div>       
        )
    }        
}

export default Countries