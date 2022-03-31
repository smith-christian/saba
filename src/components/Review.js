import React from 'react'
import MainStyle from '../css/Main.module.css'

// import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';

export default function Review(props) {

  const reviewData = {
    img: [
      "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png",
      "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png",
      "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png",
      "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png",
    ],
    name: ["Smith Christian", "John Chri", "Max Lanny", "Jax Dow"],
    description:[
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore optio tempora error laudantium laboriosam pariatur exercitationem accusamus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore optio tempora error laudantium laboriosam pariatur exercitationem accusamus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore optio tempora error laudantium laboriosam pariatur exercitationem accusamus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore optio tempora error laudantium laboriosam pariatur exercitationem accusamus.",
    ],
    // timeline:[
    //   "(2 months ago)",
    //   "(4 months ago)",
    //   "(3 months ago)",
    //   "(1 months ago)",
    // ]
  }

  const i = props.review
  return (
    <div className={MainStyle.review}>
        <center>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
            <img style={{borderRadius:'50%'}} src={reviewData.img[i]} alt="" width="100%"/>
            <h1>{reviewData.name[i]}</h1>
            <p style={{textAlign:'justify'}}>{reviewData.description[i]}</p>
            {[1,2,3,4,5].map((a, id)=><StarIcon key={id} style={{color:'#e7711b'}}/>)}
        </center>      
    </div>
  )
}
