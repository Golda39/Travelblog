import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Reset from './Reset'
import Home from './Home'
import Landing from './Landing'
import About from './About'
import Sidebar from './Sidebar'
import Viewblog from './Viewblog'
import Addblog from './Addblog'
import Adminlogin from './Adminlogin'
import Userprofile from './Userprofile'
import AdmiHom from './AdmiHom'
import ViewUsers from './ViewUsers'
import Adviewblog from './Adviewblog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Reset" element={<Reset/>}/>
        <Route path="/homepg" element={<Home/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/side" element={<Sidebar/>}/>
        <Route path="/viewblog" element={<Viewblog/>}/>
        <Route path="/add" element={<Addblog/>}/>
        <Route path="/admin" element={<Adminlogin/>}/>
        <Route path="/userprofile" element={<Userprofile/>}/>
        <Route path="/admihom" element={<AdmiHom/>}/>
        <Route path="/viewusers" element={<ViewUsers/>}/>
        <Route path="/addview" element={<Adviewblog/>}/>





        </Routes>
        </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
