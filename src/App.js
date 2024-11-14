import {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'

function App() {
  const [products, setProducts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div>
      <NavBar />
      <Home />
      <Search setSearchResults={setSearchResults} />
    </div>
  )
}

export default App
