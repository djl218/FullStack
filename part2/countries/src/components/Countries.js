import React from 'react'

const Countries = (props) => {
    const { searchResults } = props

    const countriesMapped = searchResults.map(country => (
        <div key={country.numericCode}>{country.name}</div>
    ))
    const countryCapital = searchResults.map(country => (
        <span key={country.numericCode}>{country.capital}</span>
    ))
    const countryPopulation = searchResults.map(country => (
        <span key={country.numericCode}>{country.population}</span>
    ))
    const countryLanguages = searchResults.map(country => (
        <ul key={country.numericCode}>
            {country.languages.map(language => 
                <li key={language.iso639_1}>{language.name}</li>
            )}
        </ul>    
    )) 
    const countryFlag = searchResults.map(country => (
        <img key={country.numericCode} src={country.flag} alt="Country Flag" width="100" height="100" />
    ))    

    return (
        countriesMapped.length > 10  ? <div>Too many matches, specify another filter</div>
      : countriesMapped.length > 1   ? countriesMapped
      : countriesMapped.length === 1 ?
        <div>
          <h2>{countriesMapped}</h2>
          <div>capital {countryCapital}</div>
          <div>population {countryPopulation}</div>
          <h3>languages</h3>
          <div>
            {countryLanguages}
          </div>
          <div>{countryFlag}</div>  
        </div> 
      : <div>No results</div>       
    )    
}

export default Countries