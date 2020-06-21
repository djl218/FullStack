import React from 'react'

const Filter = (props) => {
    const [ newSearch, setNewSearch ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])

    const handleNewSearch = (event) => {
        console.log(event.target.value)
        setNewSearch(event.target.value)
    }
    React.useEffect(() => {
        const personSearch = 
        props.persons.filter(person => person.name.toLowerCase().includes(newSearch)
        )   
        setSearchResults(personSearch);
    }, [newSearch]);

    return (
        <div>
          filter shown with <input value={newSearch} onChange={handleNewSearch}/>
        </div>
    )
}

export default Filter