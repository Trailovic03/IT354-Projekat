
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import HomePage from './Components/HomePage'

function App() {


  return (
    <>
      <div>
        
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/SignUp' element={<SignUp />}></Route>
            <Route path='/HomePage' element={<HomePage />}></Route>


          </Routes>


        </BrowserRouter>
      </div>

    </>
  )
}

export default App
