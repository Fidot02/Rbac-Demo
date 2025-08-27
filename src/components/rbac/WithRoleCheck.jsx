import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const WithRoleCheck = (WrappedComponent, allowedRoles) => {
 


  return (props) => {
     const{user} = useContext(AuthContext);
    if (!user || !allowedRoles.includes(user.role))
    {
        return <p>Access Denied</p>
    }
    return <WrappedComponent {...props}/>
  }
}

export default WithRoleCheck