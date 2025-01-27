import React,{memo} from 'react'
import { Icon,ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';
import { useCurrentRoom } from '../../../context/current-room.context'
import {useMediaQuerry} from '../../../misc/custom-hooks'
import RoomInfoBtnModal from './RoomInfoBtnModal';
import EditRoomBtnDrawer from './EditRoomBtnDrawer';


const Top = () => {
  
  const name=useCurrentRoom(v=>v.name);
  const isAdmins=useCurrentRoom(v=>v.isAdmins)
  const isMobile=useMediaQuerry('(max-width:992px)');

  

  return  <div>


<div className="d-flex justify-content-between align-items-center">
        <h4 className="text-disappear d-flex align-items-center">
          <Icon
            componentClass={Link}
            to="/"
            icon="arrow-circle-left"
            size="2x"
            className={
              isMobile
                ? 'd-inline-block p-0 mr-2 text-blue link-unstyled'
                : 'd-none'
            }
          />
          <span className="text-disappear">{name}</span>
        </h4>
        <ButtonToolbar className="ws-nowrap">
          {isAdmins && <EditRoomBtnDrawer/>}
        
        </ButtonToolbar>
</div>

<div className='d-flex justify-content-between align-items-center'>
  <span> todo</span>
  <RoomInfoBtnModal/>
</div>


  </div>
  
}


export default memo(Top) 