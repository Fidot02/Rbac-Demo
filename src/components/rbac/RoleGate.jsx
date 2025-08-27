import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const RoleGate = ({role, children}) => {
const {user} = useContext(AuthContext);

if (!user || user.role !== role ) 
{
return null;
}

return (
    <>{children}</>
  )
}

export default RoleGate