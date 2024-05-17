import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Socials from './pages/Socials'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/socials" element={<Socials/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
