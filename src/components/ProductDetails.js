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
    </div>
  )
}

export default ProductDetails