import React from 'react'
import {Bar, SideBarIcon} from './Bar'

import HomeStyle from '../css/Home.module.css'
import Main from './Main'
import Footer from './Footer'
import Subscribe from './Subscribe'

export default function Home() {
 
  return (
    <div className={HomeStyle.txt_color}>
        <Bar style={{position: "fixed"}}/>
        <div>
          {/* <img style={{width:"100%", height: "700px"}} src={process.env.PUBLIC_URL + "/images/hand1.jpg"} alt=""/> */}
          <div className={HomeStyle.colorbox}>
            <h1 className={HomeStyle.h1}>ART COMING SOON</h1>
            <h2 className={HomeStyle.h2}>Stay Tuned</h2>
            <Subscribe/>
          </div>
        </div>
        <br/>
        <br/>
        <SideBarIcon/>
        <Main/>
        <Footer/>
    </div>
  )
}