import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper' 


function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState(null)

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  useEffect(() => {
    if (search) {
      setData(fetchData(search))
    }
  }, [search])

  return (
    <div className="App">
      <SearchBar setSearch={handleSearch} />
      {message}
      <Suspense fallback={<h1>Loading...</h1>}>
        // <Gallery data={data} />
      </Suspense>
      <Gallery data={data} />
    </div>
  );
}

export default App;
