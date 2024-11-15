import {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'
import ProductList from './components/ProductList'

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/product')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
      })
  }, [])

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(filtered)
  }
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
