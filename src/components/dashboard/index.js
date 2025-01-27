 import React from 'react'
 import {Drawer,Button,Divider, Alert} from 'rsuite';
 import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import { getUserUpdates } from '../../misc/helper';
import EditableInput from '../EditableInput';
import AvatarUploadBtn from './AvatarUploadBtn';
import ProviderBlock from './ProviderBlock';


const Dashboard = ({onSignOut}) => {
   const  {profile} = useProfile();
   const onSave= async newData =>{
    // console.log("newData",newData);
    //  const userNicknameRef = database
    //  .ref(`/profiles/${profile.uid}`)
    //  .child('name');


     try {
      // await userNicknameRef.set(newData);
      
      const updates=await getUserUpdates(profile.uid,
        'name',
        newData,
        database);
        database.ref().update(updates)

      Alert.success('Nickname has been updated',4000)

      
     } catch (err) {
      Alert.error(err.message,4000);
     }
   }

return ( 
    // <div>hey, buppi how are you</div>
 <>
    <Drawer.Header>
      <Drawer.Title>Dashboard</Drawer.Title>
  </Drawer.Header>
   
    <Drawer.Body>
      <h3> hey , {profile.name}</h3>
      <ProviderBlock/>
      <Divider/>
     <EditableInput
      name="nickname"
      initialValue={profile.name}
      onSave={onSave}
      // mb stand for margin bottom//
      label={<h6 className="mb-2">Nickname</h6>}
      />
        <AvatarUploadBtn />
      
       
</Drawer.Body>
   
    <Drawer.Footer>
      <Button block  color="red" onClick={onSignOut} >Signout</Button>
    </Drawer.Footer>
    
    
    
    </> 
   
  )
}

export default Dashboard