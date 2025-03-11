
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import HomePage from './Components/HomePage'
import AdminPanel from './Components/AdminPanel'
import Contact from './Components/Contact'

function App() {


  return (
    <>
      <div>
        
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/SignUp' element={<SignUp />}></Route>
            <Route path='/HomePage' element={<HomePage />}></Route>
            <Route path='/AdminPanel' element={<AdminPanel/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>

          </Routes>


        </BrowserRouter>
      </div>

    </>
  )
}

export default App
