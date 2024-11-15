import React from 'react'
import { Link } from 'react-router-dom'

function ProductList({ products }) {
  return (
    <div className='product-list'>
      {products.map((product) => (
        <div key={product.id} className='prodct-card'>
          <h3>{product.name}</h3>
          <p>Code: {product.code}</p>
          <Link to={`/product/${product.id}`} className="view-details">
            View Details
          </Link>
        </div>
      ) )}
    </div>
  )
}

export default ProductList