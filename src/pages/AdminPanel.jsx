import React from 'react'
import WithRoleCheck from '../components/rbac/WithRoleCheck'
import { ROLES } from '../constants/roles'

const AdminPanel = () => {
  return (
    <h1>Admin Panel</h1>
  )
}

export default WithRoleCheck(AdminPanel,[ROLES.ADMIN, ROLES.MANAGER])