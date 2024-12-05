import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Prodcuct from './components/Prodcuct'

function App() {


  const [count, setCount] = useState(100)
  const [value,setValue] = useState("true")

  const handleIncrease = ()=>{
    let newCount = count + 1
    setCount(newCount)
  }
  const handleDecrease = ()=>{
    let newCount = count - 1
    setCount(newCount)
  }

  return (
    <>
      <Header />
      <p>This is {value == "true" ? "true"  :"false"}</p>

      <h1>Value: {count}</h1>
      <button onClick={handleIncrease} style={{ backgroundColor: "orange",
         border: 'none', 
         padding: '16px', 
         color: "white", 
         borderRadius: '4px' }}>Increase</button>
      <button onClick={handleDecrease} style={{ backgroundColor: "orangered",
         border: 'none', 
         padding: '16px', 
         color: "white", 
         borderRadius: '4px' }}>Decrease</button>

      <div className='products'>
        <Prodcuct></Prodcuct>
        <Prodcuct></Prodcuct>
        <Prodcuct></Prodcuct>
      </div>


      <Footer></Footer>

    </>
  )
}

export default App
