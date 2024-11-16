import React, { useState } from 'react'

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className='search'>
      <h2>Search Products</h2>
      <form onSubmit={handleSubmit} >
        <input type='text' placeholder='Enter product name or code...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Search