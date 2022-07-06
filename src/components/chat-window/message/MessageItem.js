import React,{memo} from 'react'
import { Button } from 'rsuite';
import TimeAgo from 'timeago-react'; 
import ProfileAvatar from '../../dashboard/ProfileAvatar'
import PresenceDot from '../../PresenceDot';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';
import {useCurrentRoom} from '../../../context/current-room.context';
import { auth } from '../../../misc/firebase';
import IconBtnControl from './IconBtnControl';


const MessageItem = ({message,handleAdmin}) => {
    const{author,createdAt,text}= message;
    const isAdmin = useCurrentRoom(v => v.isAdmin);
    const admins = useCurrentRoom(v => v.admins);
    const isMsgAuthorAdmin=admins.includes(author.uid);
    const isAuthor= auth.currentUser.uid === auth.uid;
    const canGrantAdmin =isAdmin && !isAuthor;

  return  <li className='padded mb-1'>
<div className='d-flex align-item-center font-bolder mb-1'>
  <PresenceDot uid={author.uid}/>
    <ProfileAvatar
     src={author.avatar} 
    name={author.name} 
    className="ml-1"
     size="xs" />
  
    <ProfileInfoBtnModal 
    profile={author} 
    appearence="link" 
    className='p-0 ml-1 text-black' />
     {canGrantAdmin && (
            <Button block onClick={() => handleAdmin(author.uid)} color="blue">
              {isMsgAuthorAdmin
                ? 'Remove admin permission'
                : 'Give admin in this room'}
            </Button>
          )}

   {/* {canGrantAdmin &&
   <Button  block onClick={()=>handleAdmin(author.uid)} color='blue'>
    {isMsgAuthorAdmin  
    ? 'Remove admin Permission' 
    :'Give admin in this room'}
    </Button>} */}
    
    <TimeAgo 
datetime={
  createdAt 
} 
className="font-normal text-black-45 ml-2" 
/>
<IconBtnControl
{...(true? {color:'red'}: {})}
isVisible
iconName="heart"
tooltip="LIke this message"
onClick={()=>{}}
badgeContent={5}


/>


</div>

<div>
    <span className='word-break-all'>{text}  </span>
</div>

  </li>
  
}

export default memo(MessageItem)

