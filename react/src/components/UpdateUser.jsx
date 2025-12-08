import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {

    const {updateUser} =useContext(UserContext);
    const [newName,setNewName]=useState("");

    const handleSubmit=e=>{
        e.preventDefault();
        if(newName.trim()){
            updateUser(newName)
            setNewName("")
        }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter new name' value={newName} onChange={(e)=>setNewName(e.target.value)} />
        <button type='submit'>update name</button>
        </form>
    </div>
  )
}

export default UpdateUser