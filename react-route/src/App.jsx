import React from 'react'
import About from './pages/About'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Not_found from './pages/Not-found'
import Men from './pages/men'
import Women from './pages/women'


const App = () => {
  return (
    <div className='flex flex-col'>
    <Navbar/>
      <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/product'element={<Product/>} /> 
      <Route path='*' element={<Not_found/>}/>
      <Route path='/product/men' element={<Men/>}/>
      
    <Route path='/product/women' element={<Women/>}/>

      </Routes>
    </div>
  )
}

export default App
