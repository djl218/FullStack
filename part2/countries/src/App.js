import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  //const [ weather, setWeather ] = useState()
  const [ countrySearch, setCountrySearch ] = useState('')

  const handleCountrySearch = (event) => {
    console.log(event.target.value)
    setCountrySearch(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
    })
  }, [])

  const countrySearchResults = countries.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()))

  /*const countryCapitalFilter = countrySearchResults.filter(country =>
    country.capital.includes(countrySearch))
    console.log(countryCapitalFilter)

  useEffect(() => {
    console.log('effect')
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${countryCapitalFilter}`)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      })
  }, [])*/
  
  return (
    <div>
      <Filter countrySearch={countrySearch} handleCountrySearch={handleCountrySearch} />
      <Countries 
        countrySearchResults={countrySearchResults} countrySearch={countrySearch}
        setCountrySearch={setCountrySearch} 
      />
    </div>
  );
}

export default App;
