import React from 'react'
import { createContext,useState, useEffect } from 'react'
import { MOCK_USERS } from '../constants/mockUsers';


const AuthContext = createContext();
const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const[loading, setLoading] =useState(true);

 useEffect(()=>{
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if(storedUser)
  {
    setUser(storedUser);
  }
  setLoading(false);

 },[]);
 
    const login = (username, password) => {

    const foundUser = MOCK_USERS.find((u)=>{
        
          return u.username === username && u.password === password
    }
        );

   

    if(foundUser)
    {
        setUser(foundUser);
        localStorage.setItem('user', JSON.stringify(foundUser));
        return true;
    }
   return false;
  }
    
  const logout = ()=> {
  setUser(null);
  localStorage.removeItem('user');
  }



  return (
    <AuthContext.Provider value={{login, logout, user, loading}}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext}