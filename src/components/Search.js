import React, { useState } from 'react'

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }
  
  return (
    <form>
      <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search product by name' />
      <button onClick={handleSearch}>Search</button>
    </form>
  )
}

export default Search