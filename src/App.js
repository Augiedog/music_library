import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './DataContext'


function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])
  
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
      const data = await response.json()
      console.log(data)
      if (data.results.length > 0) {
        setData(data.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }
  }, [search])

  return (
    <div className="App">
      <SearchBar setSearch={handleSearch} />
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
