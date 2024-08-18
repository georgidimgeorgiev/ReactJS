
import { useState } from 'react'
import Header from './Header'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import About from './components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import BookCreate from './components/book-create/BookCreate'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import Register from './components/register/Register'
import BookDetails from './components/book-details/BookDetails'
import { AuthContext } from './context/AuthContext'


function App() {
  const[authState, setAuthState] = useState({});
  const changeAuthState = (state) => {
    setAuthState(state);
  }

  const contextData = {
    email : authState.email,
    accessToken : authState.accessToken
  }

  return (
    <AuthContext.Provider value={contextData}>
       <Header />

       {/* Main Content */}
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/books/:bookId/details' element={<BookDetails/>}/>
            <Route path='/about' element={<About/>}>
              {/* <Route path='/mission' element={<Mission/>}/> */}
              {/* <Route path='/our-team' element={<OurTeam/>}/> */}
              {/* <Route path='/contact-us' element={<ContactUs/>}/> */}
            </Route>
            <Route path='/book-create' element={<BookCreate/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </main>

    </AuthContext.Provider>
  )
}

export default App
