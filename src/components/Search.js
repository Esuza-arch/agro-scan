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
    </div>
  )
}

export default Search