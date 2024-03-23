import React from "react"
import { AuthContext } from "../Context/AuthContext"

//useAuth is custom hook of AuthContext
const useAuth = () =>{
    return React.useContext(AuthContext)
}

export default useAuth