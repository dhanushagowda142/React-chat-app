import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Pnf from './pages/Pnf'
import { ToastContainer } from 'react-toastify'
import Protected from './PrivateRoute/Protected'

function App() {
  return (
    <BrowserRouter>
          <ToastContainer autoClose={4000} position={'bottom-right'} />
           <Routes>
                <Route path={'/'} element={
                <Protected>
                  <Home/>
                </Protected>} />

                {/* <Route element={<Protected/>}> //  as a component 
                  <Route path={'/'} element={<Home/>}/>  
                </Route> */}

                <Route path={'/login'} element={<Login/>} />
                <Route path={'/register'} element={<Register/>} />
                <Route path={'/pnf'} element={<Pnf/>} />
           </Routes>
    </BrowserRouter>
    )
}

export default App