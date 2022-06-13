import React from 'react'
// imported Navigate in place of Redirect
import { Redirect, Route } from 'react-router';


const PublicRoute = ({children, ...routeProps}) => {
    const profile= false;
    if(profile){
        return <Redirect to="/"/>
    }

  return  <Route {...routeProps}> {children} </Route>
  
}

export default PublicRoute