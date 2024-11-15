import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails({ products }) {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div className='product-details'>
      <h2>{product.name}</h2>
      <p>Code: {product.code}</p>
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul> {product.ingredients.map((ing, index) => (
          <li key={index}>
            <h4>{ing.name}</h4>
            <p>Benefits: {ing.benefits}</p>
            <p>Hazards: {ing.hazards}</p>
          </li>
        ))} </ul>
      </div>
    </div>
  )
}

export default ProductDetails