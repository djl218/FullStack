// Some contries that are in country API are not in weather API.  Causes crash if that country is searched for.
// If you render a single country result and then type some random letters, the app wll crash if you try to delete those random letters.
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({ countrySearchResults, countrySearch, setCountrySearch }) => {
    const api_key = process.env.REACT_APP_API_KEY

    const [ weather, setWeather ] = useState()

    const countriesMapped = countrySearchResults.map(country => (
        <span key={country.numericCode}>{country.name}</span>
    ))
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

    const countryName = countrySearchResults.map(country => (
        country.name
    ))
    useEffect(() => {
        console.log('effect')
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${countryName[0]}`)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
        })
    }, [api_key, countryName[0]])   // Still getting warning because countryName with no index is not included in dependency array

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
    if (/*countrySearch === countrySearchResults.filter(country => country.name) ||*/
        countriesMapped.length === 1) {

        const capital = weather.location.name
        const temperature = weather.current.temperature
        const weatherIcon = weather.current.weather_icons
        const windSpeed = weather.current.wind_speed
        const windDirection = weather.current.wind_dir

        return (
            <div>
                <h2>{countriesMapped}</h2>
                <div>capital {countryCapitalMap}</div>
                <div>population {countryPopulation}</div>
                <h3>languages</h3>
                <div>{countryLanguages}</div>
                <div>{countryFlag}</div>
                <h3>Weather in {capital}</h3>
                <div><b>temperature:</b> {temperature} Celcius</div>
                <img src={weatherIcon} alt="Weather Icon" width="50" height="50" />
                <div><b>wind:</b> {windSpeed} mph direction {windDirection}</div> 
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