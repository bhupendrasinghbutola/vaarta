import React,{createContext,useState,useEffect,useContext} from "react";
import { database } from "../misc/firebase";
import { transformToArrWithId } from "../misc/helper";


const RoomsContext = createContext();
export const RoomsProvider = ({ children }) => {
    const [rooms, setRooms] = useState(null);

    useEffect(() => {
      const roomListRef = database.ref( 'rooms');
      roomListRef.on('value', (snap) =>{
        const data =transformToArrWithId(snap.val());
        setRooms(data);
        // console.log('snap.val()',snap.val())
      })
  
    //   onValue(roomListRef, snap => {
    //     const data = transformToArrWithId(snap.val());
    //     setRooms(data);
    //   });
  
      return () => {
        roomListRef.off();
      };
    }, []);
    return  <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
      
}

export const  useRooms =() => useContext(RoomsContext);
