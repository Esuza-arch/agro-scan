import React, { useState } from 'react'

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div>
      <h2>Search Products</h2>
      <form>
        <input type='text' placeholder='Enter product name or code...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
    </div>
  )
}

export default Search