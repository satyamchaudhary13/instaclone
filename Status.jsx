import React from 'react'
import"../../Styles/status.css" 
// import {obj as statusObj} from "../../data/statusData"
import obj from '../../data/statusData'

const Status = () => {
  return (
    <div className = 'statusContainer'>
         {
          obj.map(obj=>{
            return<div style={{display:'flex',flexDirection:"column", gap:"10px",
            borderRadius:"50%",alignItems:'center'
            }}>
              <img style={{border:"4px solid red",borderRadius:"50%"}} width="50px" height="50px" src={`${obj.profilePic}`} alt='profilepictures'/>
              <span>{obj.username}</span>
            </div>
          })
         }
    </div>
  )
}

export default Status