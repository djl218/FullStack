import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
  }
  
  export const useCountry = (name) => {
    const [country, setCountry] = useState(null)
  
    useEffect(() => {
      if (name) {
        axios
          .get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
          .then(response => {
            setCountry(response.data)
          })
          .catch(error => {
            if (error.response.status === 404) {
              setCountry('not found')
            }
          })
      }
    }, [name])
  
    return country
  }