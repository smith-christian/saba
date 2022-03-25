import React from 'react'
import MainStyle from '../css/Main.module.css'

import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';

export default function Review() {

  return (
    <div className={MainStyle.review}>
        <center>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            <img style={{borderRadius:'50%'}} src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" width="100%"/>
            <h1>Smith Christian</h1>
            <p style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore optio tempora error laudantium laboriosam pariatur exercitationem accusamus.
            </p>
            {[1,2,3,4,5].map(()=><StarIcon style={{color:'#e7711b'}}/>)}
        </center>      
    </div>
  )
}
