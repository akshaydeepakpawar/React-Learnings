import React, { type FC } from 'react'
import type { adminInfo } from '../types'

type AdminInfoProps={
    admin:adminInfo
}

const AdminInfo : FC<AdminInfoProps> = ({admin}) => {

  return (
    <div>
        <h1>Admin information</h1>
        <p>id: {admin.id}</p>
        <p>name: {admin.name}</p>
        <p>email: {admin.email}</p>
        <p>last login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo