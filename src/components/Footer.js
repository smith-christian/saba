import React from 'react'
import FooterStyle from '../css/Footer.module.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
  const Links = ['Learn about black henna', 'Read more testimonials', 'How do i take care of my henna?']
  const Contact = [
    [<LocationOnIcon style={IconStyle.icon}/>,'Eglinton, Etobicoke, ON, M1H 1X8'],
    [<PhoneIcon style={IconStyle.icon}/>, 'xxx-xxx-xxxx',],
    [<MailIcon style={IconStyle.icon}/>, 'xxxxx@xxxxx.com']
  ]

  const links = Links.map((l, id)=><p key={id}>{l}</p>)
  const contact = Contact.map((l, id)=> {
    return (
    <div key={id}>
      <p><span style={FooterStyle.span}>{l[0]}</span> {l[1]}</p>
    </div>
    )
  })



  return (
    <div>
      <div className={FooterStyle.section}>
        <section>
          <h1>ADDITIONAL LINKS</h1>
          {links}
        </section>

        <section>
          <div>
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="lightblue" />
              Sorry, your browser does not support inline SVG.  
            </svg> 
          </div>
          <h1><center>Logo</center></h1>
        </section>

        <section>
          <h1>QUICK CONTACT</h1>
          {contact}
        </section>
      </div>
    </div>
  )
}

const IconStyle = {
  icon:{
    margin: '0 10px -8px 0px',
  },
}
