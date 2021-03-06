import { useState } from 'react'

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('') 

    return (
        <form onSubmit={(e) => props.setSearch(e, searchTerm)}>
            <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Enter your Search' />
            <input type='submit' />
        </form>
    )
}
export default SearchBar