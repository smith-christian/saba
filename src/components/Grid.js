import React from 'react'
import MainStyle from '../css/Main.module.css'

export default function Grid(props) {
  const {frame, g} = props
  const grid = frame.map((f, id)=>{
    if (g === "g1") {
      return (
        // src={process.env.PUBLIC_URL + "/images/" + f} 
        <>
          {id !== 1 ? 
          <div key={id} className={MainStyle.item__fb}>
            <img className={MainStyle.g1__img} src={process.env.PUBLIC_URL + "/images/" + f}  alt="Mehndi_designs"/>
          </div> 
          :
          <div key={id} className={MainStyle.item__c}>
            <img className={MainStyle.g1__img} src={process.env.PUBLIC_URL + "/images/" + f}  alt="Mehndi_designs"/>
          </div>
          }
        </>
      )
    } else if (g === "g2"){
      return (
        <div key={id}>
          <img src={process.env.PUBLIC_URL + "/images/" + f} alt="Mehndi_designs" width="100%"/>
        </div>
      )
    }
  }
  )

  return grid
}

