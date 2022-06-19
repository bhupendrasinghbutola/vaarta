import { useState ,useCallback, useEffect,querryList} from "react"


 export function  useModalState(defaultValue=false){
    const[isOpen,setIsOpen]=useState(defaultValue);
    const open =useCallback( () => setIsOpen(true), [])
    const close =useCallback( () => setIsOpen(false), [])
    
    return {isOpen,open,close}
    
}

// hooks for media querry 
export  const useMediaQuerry= querry =>{
    const[matches,setMatches]=useState(
        ()=> window.matchMedia(querry).matches
    );
    useEffect(() =>{
        const queryList=window.matchMedia(querry);
        setMatches(queryList.matches);
     
    // );
    const listner =evt => setMatches(evt.mathces);
    return () => querryList.removeListner(listner); 
},[querry]);

return matches;
}