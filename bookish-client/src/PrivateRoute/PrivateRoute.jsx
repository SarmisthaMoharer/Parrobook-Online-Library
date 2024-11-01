import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from "flowbite-react";

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading)
        {
            <div className="text-center">
        <Spinner color="Purple" aria-label="Center-aligned Purple spinner example" />
      </div>
        } 
    if(user){
        return children;
    }
  return (
    <Navigate to="/login" state={{from:location}} replace> </Navigate>
  )
}

export default PrivateRoute
