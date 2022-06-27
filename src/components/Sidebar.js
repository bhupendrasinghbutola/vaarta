import React, { useEffect, useRef, useState } from 'react'
import { Divider } from 'rsuite'
import CreateRoomBtnModel from './CreateRoomBtnModel'
import DashboardToggle from './dashboard/DashboardToggle' 
import ChatRoomList from './rooms/ChatRoomList'


const Sidebar = () => {
  const topSideBarRaf = useRef();
  const [height,setHeight] =useState(0);
 
  useEffect (() => {

    if(topSideBarRaf.current){

      setHeight(topSideBarRaf.current.scrollHeight);
    }
  },[topSideBarRaf])


  return (

    // here pt classname is used for padding from styles. 
    <div className= "h-100 pt-2">
        <div ref={topSideBarRaf}>
            <DashboardToggle/>
            <CreateRoomBtnModel/>
            <Divider> Join Converstion</Divider>

        </div>
        <ChatRoomList aboveELHeight={height} />
    </div>
  )
}

export default Sidebar