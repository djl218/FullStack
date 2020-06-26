import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  const handleNewSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
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

  useEffect(() => {
    const countrySearch = 
      countries.filter(country => country.name.toLowerCase().includes(newSearch)
      )   
    setSearchResults(countrySearch);
  }, [countries, newSearch]);

  return (
    <div>
      <Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />
      <Countries searchResults={searchResults} />
    </div>
  );
}

export default App;
