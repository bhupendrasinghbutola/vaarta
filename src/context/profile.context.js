import React,{ createContext, useState,useContext, useEffect } from "react";
import firebase  from "firebase";
import { auth, database } from "../misc/firebase";


export  const isOfflineForDatabase = {
    state: 'offline',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};

const isOnlineForDatabase = {
    state: 'online',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};


const ProfileContext=  createContext();
// ProfileProvider is wrapper which wraps the children so we destruct the children

export const ProfileProvider = ({children}) => {
    const [profile,setProfile] = useState(null);
    const[isLoading,setIsLoading]= useState(true);
    
    useEffect(() =>{ 
        let userRef;
        let userStatusRef;
        const authUnSubs=  auth.onAuthStateChanged(authObj=>{
              // console.log('authobj', authObj);
              if(authObj){

                // console.log('authobject id',authObj.uid);

                userStatusRef = database.ref(`/status/${authObj.uid}`)
                    userRef=  database.ref(`/profiles/${authObj.uid}`)
                    userRef.on('value',snap=>{
                        
                          const {name,createdAt,avatar} = snap.val();
                          const data={
                              name,
                              createdAt,
                              avatar,
                              uid:authObj.uid,
                              email:authObj.email
                          };
                          setProfile(data);
                          setIsLoading(false);
  
                          // console.log(profileData)
                      })
                       
                      database.ref('.info/connected').on('value', (snapshot) =>{
                        // If we're not currently connected, don't do anything.
                        if (!!snapshot.val() === false) {
                            return;
                        }; 
                        userStatusRef.onDisconnect().set(isOfflineForDatabase).then(()=> {

                            userStatusRef.set(isOnlineForDatabase);
                        });
                    });
                    
  
                  }else{
  
                      
              if(userRef){
                          userRef.off();
                      }
                      if(userStatusRef){
                        userStatusRef.off();
                    }
                    database.ref('.info/connected').off();


                      setProfile(null);
                      setIsLoading(false);
  
              }
          })
          return () =>{
              authUnSubs();
              database.ref('.info/connected').off();
              if(userRef){
                  userRef.off();
}
if(userStatusRef){
    userStatusRef.off();
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