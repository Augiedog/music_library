import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import ArtistView from './components/ArtistView'
import AlbumView from './components/AlbumView'
import { DataContext } from './context/DataContext'


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
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <SearchBar handleSearch={handleSearch} />
              {message}
              <DataContext.Provider value={data}>
                <Gallery />
              </DataContext.Provider>
            </Fragment>
          } />
          <Route path='/artist/:id' element={<ArtistView data={data} />} />
          <Route path='/album/:id' element={<AlbumView data={data}/>} />          
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
