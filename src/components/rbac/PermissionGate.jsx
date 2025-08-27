import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const PermissionGate = ({allowedRoles, children}) => {
const {user} = useContext(AuthContext);

if (!user ||  !allowedRoles.includes(user.role) ) 
{
return null;
}

  return (
    <>{children}</>
  )
}

export default PermissionGate