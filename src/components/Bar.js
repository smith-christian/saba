import React from 'react'
import BarStyle from '../css/Bar.module.css'

import DiamondIcon from '@mui/icons-material/Diamond';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import QuizIcon from '@mui/icons-material/Quiz';
import PhoneIcon from '@mui/icons-material/Phone';

const windows = () => {
    const { innerWidth:width} = window;
    return width;
}

// Regular Navbar
function Bar() {
    console.log(windows())
    
    const TopBar = () => {
        const nav = ['HOME', 'SERVICES', 'PORTFOLIO', 'LEARN', 'FAQ', 'CONTACT US']

        return(
            <div className={BarStyle.TopBar}>
                <div>
                    <h2 className={BarStyle.h2}>HENNA BY SABAHAT</h2>
                </div>
                {windows() > 425 ?
                <nav className={BarStyle.nav}>
                    <ul className={BarStyle.nav__ul}>
                        {nav.map((n, id)=><li key={id} className={BarStyle.nav__li}><a className={BarStyle.nav__a}>{n}</a></li>)}
                    </ul>
                </nav>
                :
                <div className={BarStyle.barIcon}>
                    <HomeIcon className={BarStyle.icon} />
                    <LightbulbIcon className={BarStyle.icon} />
                    <QuizIcon className={BarStyle.icon} />
                    <PhoneIcon className={BarStyle.icon} />
                </div>}
            </div>
        )
    }
    return (
    <div>
        <TopBar/>
    </div>
    )
}

function SideBarIcon() {

    const TopBar = () => {
        const tag = [<DiamondIcon fontSize='large' />, <InstagramIcon fontSize='large' />, <ShoppingCartIcon fontSize='large' />,]

        return(
            <div className={BarStyle.SideBarIcon}>
                {tag.map((t, id)=> {
                    return (
                        <div key={id} className={BarStyle.tag}>
                            <a>{t}</a>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
    <div>
        <TopBar/>
    </div>
    )
}

export {Bar, SideBarIcon}


// export default function Bar() {
    
//     const TopBar = () => {
//         const nav = [
//             <HomeIcon style={{marginBottom: '-3px'}}/>,
//             <PhoneIcon style={{marginBottom: '-3px'}}/>,
//             <MailIcon style={{marginBottom: '-3px'}}/>,
//             <QuizIcon style={{marginBottom: '-3px'}}/>,
//         ]

//         return(
//             <center className={BarStyle.TopBarIcon}>
//                 <nav>
//                     <ul className={BarStyle.nav__ul__Icon}>
//                         {nav.map((n, id)=><li key={id} className={BarStyle.nav__li}><a className={BarStyle.nav__a__Icon}>{n}</a></li>)}
//                     </ul>
//                 </nav>
//             </center>
//         )
//     }
//   return (
//     <div>
//         <TopBar/>
//     </div>
//   )
// }



