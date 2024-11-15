import {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'
import ProductList from './components/ProductList'

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() =>
    fetch()
)
  return (
    <div>
      <NavBar />
      <Home />
      <Search searchResults={searchResults} setSearchResults={setSearchResults} />
      <ProductList products={products}/>
    </div>
  )
}

export default App
