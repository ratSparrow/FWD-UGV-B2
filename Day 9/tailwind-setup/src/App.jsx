
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import Slider from './components/Slider'
import Users from './components/Users'
import CartModal from './components/CartModal'

function App() {

const [cart,setCart] = useState([])

  return (
    <>
    <a href=""></a>
      <Header cart = {cart}></Header>
      <Slider></Slider>
      <Products cart={cart} setCart={setCart}></Products>
      <CartModal cart={cart}></CartModal>
      <Users></Users>
      <Footer></Footer>
    </>
  )
}

export default App
