import React,{ createContext, useState,useContext, useEffect } from "react";
import { auth, database } from "../misc/firebase";



const ProfileContext=  createContext();
// ProfileProvider is wrapper which wraps the children so we destruct the children

export const ProfileProvider = ({children}) => {
    const [profile,setProfile] = useState(null);
    const[isLoading,setIsLoading]= useState(true);
    
    useEffect(() =>{ let userRef;
        const authUnSubs=  auth.onAuthStateChanged(authObj=>{
              // console.log('authobj', authObj);
              if(authObj){
                    userRef=  database.ref(`/profiles/${authObj.uid}`)
                    userRef.on('value',snap=>{
                        
                          const {name,createdAt} = snap.val();
                          const data={
                              name,
                              createdAt,
                              uid:authObj.uid,
                              email:authObj.email
                          };
                          setProfile(data);
                          setIsLoading(false);
  
                          // console.log(profileData)
                      })
  
                  }else{
  
                      
              if(userRef){
                          userRef.off();
                      }
                      setProfile(null);
                      setIsLoading(false);
  
              }
          })
          return () =>{
              authUnSubs();
              if(userRef){
                  userRef.off();
}
}
},[]);
       
    

       return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <ProfileContext.Provider value={{ isLoading,profile }}>
        {children}

       </ProfileContext.Provider>
       )
};

// we make another hooks useProfile() to make it more excressible in place of useContext() in {PrivateRoute,PublicRoute}
export const useProfile = () => useContext(ProfileContext);