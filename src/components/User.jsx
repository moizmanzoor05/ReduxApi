import { useState } from 'react'
import React from 'react'
import {useSelector} from 'react-redux'

const User = () => {
    const [getUser,setUser] = useState("user")
    const userData = useSelector((state) => state.user.user)
  return (
    <div>
        <h3>{getUser}</h3>
        <button onClick={()=> {setUser(userData)}}> Get Users </button>
    </div>
  )
}

export default User