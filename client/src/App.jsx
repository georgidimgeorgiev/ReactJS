
import { useState } from 'react'
import Header from './Header'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Catalog from './components/Catalog/Catalog'
import Contact from './components/About/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
    </>
  )
}

export default App
