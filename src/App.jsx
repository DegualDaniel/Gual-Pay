import React from 'react'
// import { CardDemo } from './Pages/CardDemoPage' 
import NavPage from './Pages/NavPage'
import './App.css'
import HomePage from './Pages/HomePage'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
// import { Home } from 'lucide-react'



const App = () => {
  return (
    <div> 
      <NavPage />
      <HomePage />
      {/* <CardDemo />  */}
      <SignUpPage />
      <LoginPage />
       
    </div>
  )
}

export default App