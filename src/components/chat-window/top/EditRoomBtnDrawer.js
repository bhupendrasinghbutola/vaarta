import React, { memo } from 'react';
import { useParams } from 'react-router';
import { Button, Modal,Alert } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useMediaQuerry, useModalState } from '../../../misc/custom-hooks';
import { database } from '../../../misc/firebase';
import EditableInput from '../../EditableInput'


const RoomInfoBtnModal = () => {
  const { isOpen, close, open } = useModalState();
  const {chatId}= useParams();
  const isMobile= useMediaQuerry('(max-width:992px)')
  const description = useCurrentRoom(v => v.description);
  const name = useCurrentRoom(v => v.name);

const updateData =(key,value)=>{
    database.ref(`rooms/${chatId}`).child(key).set(value).then(()=>{
        
        Alert.success('Successfully Updated',4000)
    }).catch(err=>{
        
        Alert.error(err.message,4000);
    })

}

  const onNameSave =(newName)=>{
    updateData('name', newName);

  }
  const onDescriptionSave=(newDesc)=>{
    updateData('description',newDesc)

  }

  return (
    <>
      <Button  className="br-circle" color='red' size='sm' onClick={open} >
        A
      </Button>
      <Modal full={isMobile} show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>About {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditableInput 
            initialValue={name}
            onSave={onNameSave}
            label=  {<h6 className="mb-1">Name</h6>}
            emptyMsg= "Name cannot be empty"
            />
            <EditableInput
            componentClass="textarea"
            rows={5}
            initialValue={description}
            onSave={onDescriptionSave}
            emptyMsg="Desciption cannot be empty"
            wrapperClassName='mt-3'
            />
        
          {/* <p>{description}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button block onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default memo(RoomInfoBtnModal);