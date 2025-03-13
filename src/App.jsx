import './App.css'
import Nav from './componets/Nav'
import Header from './componets/Header'
import Footer from './componets/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <><Header/>
      <Nav/>
      <Outlet/>
      <Footer/> 
    </>
  )
}

export default App
