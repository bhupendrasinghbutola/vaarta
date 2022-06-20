import { useState ,useEffect,useCallback} from "react"


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
    const listener = evt => setMatches(evt.mathces);
    queryList.addListener(listener);
    return () => queryList.removeListener(listener); 
},[querry]);

return matches;
}