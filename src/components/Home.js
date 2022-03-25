import React from 'react'
import Bar from './Bar'
import HomeStyle from '../css/Home.module.css'
import Main from './Main'
import Footer from './Footer'

export default function Home() {
 
  return (
    <div className={HomeStyle.txt_color}>
        <Bar/>
        <br/>
        <br/>
        <Main/>
        <Footer/>
    </div>
  )
}