// import { useState ,useEffect,useCallback} from "react"
// import { database } from "./firebase";


//  export function  useModalState(defaultValue=false){
//     const[isOpen,setIsOpen]=useState(defaultValue);
//     const open =useCallback( () => setIsOpen(true), [])
//     const close =useCallback( () => setIsOpen(false), [])
    
//     return {isOpen,open,close}
    
// }

// // hooks for media querry 
// export  const useMediaQuerry= querry =>{
//     const[matches,setMatches]=useState(
//         ()=> window.matchMedia(querry).matches
//     );
//     useEffect(() =>{
//         const queryList=window.matchMedia(querry);
//         setMatches(queryList.matches);
     
//     // );
//     const listener = evt => setMatches(evt.mathces);
//     queryList.addListener(listener);
//     return () => queryList.removeListener(listener); 
// },[querry]);

// return matches;
// }
// export function usePresence(uid) {
//     const [presence, setPresence] = useState(null);
  
//     useEffect(() => {
//       const userStatusRef = database.ref(`/status/${uid}`)
//       userStatusRef.on('value', snap =>{
//         if(snap.exists()){
//             const data =snap.val();
//             setPresence(data);
//         }
//       })
  
    
//       return () => {
//         // off(userStatusRef);
//         userStatusRef.off();
//       };
//     }, [uid]);
  
//     return presence;
// }

// export function useHover() {
//   const [isHovered, setIsHovered] = useState(false);

//   const elementRef = useRef(null);

//   const handleMouseOver = () => setIsHovered(true);
//   const handleMouseOut = () => setIsHovered(false);

//   useEffect(
//     () => {
//       const node = elementRef.current;
//       if (node) {
//         node.addEventListener('mouseover', handleMouseOver);
//         node.addEventListener('mouseout', handleMouseOut);
//       }
//       return () => {
//         node.removeEventListener('mouseover', handleMouseOver);
//         node.removeEventListener('mouseout', handleMouseOut);
//       };
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [elementRef.current] // Recall only if ref changes
//   );

//   return [elementRef, isHovered];

// }


// import { off, onValue, ref } from 'firebase/database';
import { useState, useCallback, useEffect, useRef } from 'react';
import { database } from './firebase';


export function useModalState(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open, close };
}

export const useMediaQuerry = querry => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(querry).matches
  );

  useEffect(() => {
    const queryList = window.matchMedia(querry);
    setMatches(queryList.matches);

    const listener = evt => setMatches(evt.matches);

    queryList.addListener(listener);
    return () => queryList.removeListener(listener);
  }, [querry]);

  return matches;
};

export function usePresence(uid) {
  const [presence, setPresence] = useState(null);

  useEffect(() => {
    // const userStatusRef = ref(database, `/status/${uid}`);
    const userStatusRef = database.ref(`/status/${uid}`)
    userStatusRef.on('value', snap =>{
              if(snap.exists()){
                  const data =snap.val();
                  setPresence(data);
              }
            })

    return () => {
      userStatusRef.off();
    };
  }, [uid]);

  return presence;
}

export function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const elementRef = useRef(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(
    () => {
      const node = elementRef.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
      }
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [elementRef.current] // Recall only if ref changes
  );

  return [elementRef, isHovered];
}