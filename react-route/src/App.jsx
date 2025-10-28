import React from 'react'
import About from './pages/About'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import Product from './pages/Product'
import Not_found from './pages/Not-found'
import Men from './pages/men'
import Women from './pages/women'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className='flex flex-col'>
    <Navbar/>
    <Navbar2/>
      <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/course' element={<Course/>}/> 
       <Route path='/course/:courseId' element={<Course/>}/>
      <Route path='/product'element={<Product/>}>
      <Route path='men' element={<Men/>}/>
    <Route path='women' element={<Women/>}/>
      </Route> 

      <Route path='*' element={<Not_found/>}/>

      </Routes>
    </div>
  )
}

export default App
