import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminPanel from './pages/AdminPanel'
import Users from './pages/Users'
import Reports from './pages/Reports'
import LoginForm from './components/auth/LoginForm'
import LoadingScreen from './components/shared/LoadingScreen'
import Dashboard from './pages/Dashboard'
import Navigation from './components/navigation/Navigation'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'



function App() {
  const {user, loading} = useContext(AuthContext);
  if(loading){
  return <LoadingScreen/>

  }

  return (
   <Router>
   {user && <Navigation/>}
   <Routes>
    {!user 
    ?(<Route path='/login' element={<LoginForm/>}/>)
    :(
    <>
    <Route path='/' element={<Dashboard/>} />
    <Route path='/users' element={<Users/>} />
    <Route path='/reports' element={<Reports/>} />
    <Route path='/admin' element={<AdminPanel/>} />
    </>)
    }
    <Route path='*' element={<Navigate to={user ? "/" : '/login'}/>}/>
   </Routes>
   
   
   </Router>
  )
}

export default App
