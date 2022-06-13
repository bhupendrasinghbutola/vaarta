import React from 'react'
// imported Navigate in place of Redirect
import { Redirect, Route } from 'react-router';
import { useProfile } from '../context/profile.context';


const PublicRoute = ({children, ...routeProps}) => {
    const profile= useProfile();
    if(profile){
        return <Redirect to="/"/>
    }

  return  <Route {...routeProps}> {children} </Route>
  
}

export default PublicRoute