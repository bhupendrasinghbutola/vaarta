import React from 'react'
import CreateRoomBtnModel from './CreateRoomBtnModel'
import DashboardToggle from './dashboard/DashboardToggle' 


const Sidebar = () => {
  return (
    // here pt classname is used for padding from styles. 
    <div className= "h-100 pt-2">
        <div>
            <DashboardToggle/>
            <CreateRoomBtnModel/>
        </div>
        bottom
    </div>
  )
}

export default Sidebar