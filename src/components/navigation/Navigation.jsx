import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Navigation = () => {
    const {user, logout} = useContext(AuthContext);
   const navigate = useNavigate();



  return (
    <nav>
    <div>
     <NavLink to='/'>Dashboard</NavLink>
     <NavLink to='/users'>Users</NavLink>
     <NavLink to='/reports'>Reports</NavLink>
     <NavLink to='/admin'>Admin Panel</NavLink>
    </div>
     <div>
        <span>Hello, {user?.username}</span>
        <button onClick={()=>{logout(); navigate('/login')}}>Logout</button>
     </div>

    </nav>
  )
}

export default Navigation