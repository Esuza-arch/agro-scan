import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails({ products }) {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) return <p>Product not found</p>

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails