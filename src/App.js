import React, { useState, Suspense, useRef} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArtistView from './Components/ArtistView'
import AlbumView from './Components/AlbumView'
import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'
import Spinner from './Components/Spinner'
import { DataContext } from './Context/DataContext'
import { SearchContext } from './Context/SearchContext'
import { createResource as fetchData } from './helper'

function App() {
  let searchInput = useRef('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  const handleSearch = (e, term) => {
    e.preventDefault()
    setData(fetchData(term, 'main'))
  }

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      )
    }
  }

  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route exact path='/' element={
            <React.Fragment>
             <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
              <SearchBar />
             </SearchContext.Provider>
              <DataContext.Provider value={data}>
                {renderGallery()}
              </DataContext.Provider>
            </React.Fragment>
          } />

          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;