import React from 'react'
import SideBar from '../Common/SideBar'
import Header from './Header'
import {myInfo} from '../../data/myinfo';
import MyPost from './MyPost';

const Profile = () => {
  return (
    <div style={{display:'flex',gap:'10vw'}}>
        <SideBar/>
        <div>
        <Header myInfo={myInfo}/>
        <MyPost post={myInfo.posts}/>
        </div>
        
        
        
        {/* <Header/> */}
        
    </div>
  )
}

export default Profile