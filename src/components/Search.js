import React, { useState } from 'react'

function Search(setSearchResults) {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSearch = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/products?name_like=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setSearchResults(data))
  }
  return (
    <form>
      <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search product by name' />
      <button onClick={handleSearch}>Search</button>
    </form>
  )
}

export default Search