import React from 'react'
import firebase from 'firebase/app'
 import { Container, Grid, Row, Col, Panel,Button,Icon, Alert, Footer } from 'rsuite'
import {auth, database} from '../misc/firebase'
 

const SignIn = () => {

  const signInWithProvider=  async(provider)=>{

try {
  const {additionalUserInfo,user}=await  auth.signInWithPopup(provider);
  Alert.success('Signed',4000);
  if(additionalUserInfo.isNewUser){
     await database.ref(`profiles/${user.uid}`).set({
      name:user.displayName,
      // here using another static TIMESTAMP like provider for firebase
      createdAt:firebase.database.ServerValue.TIMESTAMP

    })
  }
  

} catch (err) {
  Alert.info(err.message,4000);
  
}

};

   const onFacebookSignIn =()=>{
   signInWithProvider(new firebase.auth.FacebookAuthProvider());
  }
 const onGoogleSignIn=()=>{
   signInWithProvider(new firebase.auth.GoogleAuthProvider());
 
 }
 





  return <Container>
<Grid  className='mt-page'>
  <Row>
    <Col  xs={24} md={12} mdOffset={6}>
    <Panel> 
      <div className='text-center'>

<h1 className='text-center'>Welcome to Chat</h1>
<p>Progressive Chat platform.</p>

      </div >
<div className='mt-3'>
<Button block color="blue" onClick={onFacebookSignIn}>
  <Icon icon="facebook"/> Continue with facebook
</Button>

<Button block color="green" onClick={onGoogleSignIn}>
  <Icon  icon="google"/> Continue with Google
</Button>

<Footer > Developed by Bhupendra Singh Butola </Footer>

</div>


      
       </Panel> 
    </Col>
  </Row>

</Grid>


  </Container>
  
}

export default SignIn


