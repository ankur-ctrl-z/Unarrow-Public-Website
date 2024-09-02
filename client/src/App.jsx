import './App.css'
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/layout/Navbar'
import Services from './components/pages/Services'
import AboutUs from './components/pages/AboutUs'
import Careers from './components/pages/Careers'
import Footer from './components/layout/Footer'
import Contact from './components/pages/Contact'
import Blogs from './components/pages/Blog'
import Works from './components/pages/Works'
import LearnMore from './components/pages/LearnMore'

function App() {
  return (
    <>
      <Router>
       <Navbar/>
        <Routes>

        {/* page- navigation */}
          <Route path='/service' element={<Services/>}/> 
          <Route path='/aboutus' element={<AboutUs/>}/> 
          <Route path='/careers' element={<Careers/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/works' element={<Works/>}/>
         
          <Route path='/learnmore' element={<LearnMore/>}/>


          {/* Home-page */}
          <Route path='/' element={<Home/>}/> 
        
        </Routes>
        <Footer/>
      </Router>
   </>
  )
}

export default App
