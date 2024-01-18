import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import LuggageBags from './pages/LuggageBags'
import BackPacks from './pages/BackPacks'
import BrowseMore from './pages/BrowseMore'
import Duffles from './pages/Duffles'
import DiscoverList from './pages/DiscoverList'
import DetailedProduct from './pages/DetailedProduct'


const App = () => {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/luggage' element={<LuggageBags />} />
          <Route path='/backpacks' element={<BackPacks />} />
          <Route path='/browsemore' element={<BrowseMore/>} />
          <Route path='/duffles' element={<Duffles/>} />
          <Route path='/discoverlist' element={<DiscoverList/>} />

          <Route path='/learnmore/:ID' element={<DetailedProduct/>} />


          


        </Routes>


      </Router>
      <ToastContainer />

    </>
  )
}

export default App