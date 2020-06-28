import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
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
