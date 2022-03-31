import React from 'react'
import MainStyle from '../css/Main.module.css'
import Grid from './Grid'
import Review from './Review'

export default function Main() {

  const section1  = ['2.jpg', '1.jpg', '2.jpg']
  const section2 = ['Mehndi_designs1.jpg','Mehndi_designs2.jpg','Mehndi_designs3.jpg', 'Mehndi_designs1.jpg','Mehndi_designs2.jpg','Mehndi_designs3.jpg']

  return (
    <div className={MainStyle.div__section}>
        <section className={MainStyle.section}>
            <h1>Section 1</h1>
            <div className={MainStyle.section1_grid1}>
              <Grid frame={section1}  g="g1"></Grid>
            </div>
        </section>
        <br/>
        <br/>
        <br/>
        <section className={MainStyle.section}>
          <h1>Section 2</h1>
          { true && <div className={MainStyle.section2_grid2}>
            <Grid frame={section2} g="g2"></Grid>
          </div>}
        </section>
        <br/>
        <br/>
        <br/>
        <section className={MainStyle.section}>
            <h1>Section 3</h1>
        </section>
        <section className={MainStyle.section}>
          <div className={MainStyle.section4_grid4}>
            {[1,2,3,4].map((r, id)=><Review key={id} review={id}/>)}
          </div>
        </section>
    </div>
  )
}
