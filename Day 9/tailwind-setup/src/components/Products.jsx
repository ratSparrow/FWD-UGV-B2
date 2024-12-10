/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export default function Products(props) {
  const {cart,setCart} = props
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('./products.JSON')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  const handleAddToCart =(item)=>{
    
    const newCart = [...cart, item]
    setCart(newCart)
  }

  console.log("product cart a add hoise", cart)
  return (
    <>
      <h1 className="text-center text-red-300 text-xl">Our Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {
          products.map(product => <div key={product.id} className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.category}</p>
              <p>{product.brand}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <div className="card-actions justify-end">
                <button onClick={()=>handleAddToCart(product)} className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </>
  )
}
