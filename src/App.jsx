import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import Work from './pages/Work'
import Experience from './pages/Experience'
import Guestbook from './pages/Guestbook'
import Contact from './pages/Contact'

function App() {

  return (
    <>  
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/guestbook" element={<Guestbook/>}/>
      <Route path="/contact" element={<Contact/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
