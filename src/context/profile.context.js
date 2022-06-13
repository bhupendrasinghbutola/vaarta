import React,{ createContext, useState,useContext } from "react";



const ProfileContext=  createContext();
// ProfileProvider is wrapper which wraps the children so we destruct the children
export const ProfileProvider = ({children}) => {
    const [profile] = useState(false);
       return (<ProfileContext.Provider value={profile}>
        {children}

       </ProfileContext.Provider>)
}

// we make another hooks useProfile() to make it more excressible in place of useContext() in {PrivateRoute,PublicRoute}
export const useProfile = () => useContext(ProfileContext);