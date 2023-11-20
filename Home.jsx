import React from 'react'
import SideBar from '../Common/SideBar'
import Main from './Main'
import Suggestion from './Suggestion'


const Home = () => {
  return (
    <div style={{display:'flex',justifyContent:"space-between"}}>
      <div>
      <SideBar/>
      </div>
      <div>
       <Main/>
      </div>
      <div>
       <Suggestion/>
      </div>
     
     </div>
  )
}

export default Home