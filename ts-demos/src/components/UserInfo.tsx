import React, { type FC } from 'react'
import type { Info } from '../types'
type UserInfoProps={
    user:Info
}
const UserInfo : FC<UserInfoProps> = ({user}) => {
  return (
    <div>
        <h2>User Information</h2>
        <p>ID :{user.id}</p>
        <p>name :{user.name}</p>
        <p>email :{user.email}</p>
    </div>
  )
}

export default UserInfo