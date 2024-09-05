import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <h1 className='w-full text-3xl bg-blue-700'>React Router</h1>
      <Footer/>
    </>
  )
}

export default App
