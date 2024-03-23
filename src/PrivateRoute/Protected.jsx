import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function Protected(props) {
    const { currentUser } = useContext(AuthContext)

    // if currentUser is not present
    if(!currentUser)
      return <Navigate to={`/login`}/>
    
      //if currentuser is present
    return props.children

    // return(
    //     <React.Fragment>
    //         {
    //             currentUser? <Outlet/> :<Navigate to={'/login'}/>
    //         }
    //     </React.Fragment>9731288622
    // )
}

export default Protected