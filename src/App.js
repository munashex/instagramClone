import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './screens/login'
import SignUp from './screens/signup';
import Home from './screens/Home'
import CreateUser from './screens/CreateUser';
import Post from './screens/Post';
import Story from './screens/story'


function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="" element={<Login/>}/> 
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/createuser" element={<CreateUser/>}/>
       <Route path="/user" element={<Home/>}/>
       <Route path="/post" element={<Post/>}/>
       <Route path="/story" element={<Story/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App