import React, { useState } from 'react'

function Search(setSearchResults) {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = () => {
    fetch(`http://localhost:3001/products?name_like=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setSearchResults(data))
  }
  return (
    <div>
      Search
    </div>
  )
}

export default Search