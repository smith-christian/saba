import React from 'react'
import SubscribeStyle from '../css/Subscribe.module.css'

import SendIcon from '@mui/icons-material/Send';


export default function Subscribe() {
  return (
    <div className={SubscribeStyle.a}>
        <h1 className={SubscribeStyle.text}>Subscribe for latest News and Updates</h1>
      <form className={SubscribeStyle.form}>
        <input className={SubscribeStyle.subscribeInput} type="email" placeholder='YOUR EMAIL' required/>
        <button className={SubscribeStyle.buttonSubscribe} type='submit'><SendIcon fontSize='small'/></button>
      </form>
    </div>
  )
}
