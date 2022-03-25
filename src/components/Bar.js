import React from 'react'
import BarStyle from '../css/Bar.module.css'

export default function Bar() {

    const TopBar = () => {
        const nav = ['HOME', 'SERVICES', 'PORTFOLIO', 'LEARN', 'FAQ', 'CONTACT US']

        return(
            <div className={BarStyle.TopBar}>
                <nav>
                    <ul className={BarStyle.nav__ul}>
                        {nav.map((n, id)=><li key={id} className={BarStyle.nav__li}><a className={BarStyle.nav__a}>{n}</a></li>)}
                    </ul>
                </nav>
            </div>
        )
    }
  return (
    <div>
        <TopBar/>
    </div>
  )
}