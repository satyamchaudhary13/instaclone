import React from 'react'
import "../../Styles/sidebar.css"
const SideBar = () => {
  return (
    <div className = 'sidebarContainer'>
      <ul>
        <li><img width="120px" src="https://i.pinimg.com/736x/4b/48/99/4b48995883cfba814b286d8cf6acfca3.jpg "></img></li>
        <li>Home</li>
        <li>Search</li>
        <li>Explore</li>
        <li>Reels</li>
        <li>Messages</li>
        <li>Notifications</li>
        <li>Create</li>
        <li>Profile</li>
      </ul>
    </div>
  )
}

export default SideBar