 import React from 'react'
 import {Drawer,Button,} from 'rsuite';
 import { useProfile } from '../../context/profile.context';


const Dashboard = ({onSignOut}) => {
   const  {profile} = useProfile();

return ( 
    // <div>hey, buppi how are you</div>
 <>
    <Drawer.Header>
      <Drawer.Title>Dashboard</Drawer.Title>
  </Drawer.Header>
   
    <Drawer.Body>
      <h3> hey , {profile.name}</h3>
</Drawer.Body>
   
    <Drawer.Footer>
      <Button block  color="red" onClick={onSignOut} >Signout</Button>
    </Drawer.Footer>
    
    
    
    </> 
   
  )
}

export default Dashboard