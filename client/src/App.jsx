
import { useState } from 'react'
import Header from './Header'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import Login from './components/login/Login'
import About from './components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './components/logout/Logout'
import Register from './components/register/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />

       {/* Main Content */}
        <main id="main-content">
        </main>

       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/about' element={<About/>}>
            {/* <Route path='/mission' element={<Mission/>}/> */}
            {/* <Route path='/our-team' element={<OurTeam/>}/> */}
            {/* <Route path='/contact-us' element={<ContactUs/>}/> */}
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/register' element={<Register/>}/>
       </Routes>
    </>
  )
}

export default App
