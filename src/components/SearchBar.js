import { useState } from 'react'

function SearchBar(props) {
    return (
        <form>
            <input placeholder='Enter your Search' />
            <input type="submit" />
        </form>
    )
}
export default SearchBar