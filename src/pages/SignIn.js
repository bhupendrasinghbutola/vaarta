import React from 'react'
 import { Container, Grid, Row, Col, Panel,Button,Icon } from 'rsuite'



const SignIn = () => {
  return <Container>
<Grid >
  <Row>
    <Col  xs={24} md={12} mdOffset={6}>
    <Panel> 
      <div>

<h1 className='text-center'>Welcome to Chat</h1>
<p>Progressive Chat platform.</p>

      </div>
<div>
<Button block color="blue">
  <Icon icon="facebook"/> Continue with facebook
</Button>

<Button block color="green">
  <Icon  icon="google"/> Continue with Google
</Button>



</div>


      
       </Panel> 
    </Col>
  </Row>

</Grid>


  </Container>
  
}

export default SignIn