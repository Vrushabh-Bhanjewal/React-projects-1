import React, { useState } from 'react'
import style from './accord.module.css'
function ItemList({curr}) {
    const [isActive,setActive] = useState(false)
    const handleButton=()=>{
        setActive(!isActive)
    }
  return (
    <li   className={style[`main-item`]}> 
        <div className={style.item}>
            <p>{curr.question}</p>
            <button className={style.btn} onClick={handleButton}>{isActive ? 'Close' : "Show"}</button>
        </div>
        <p className={style.ans}>{isActive && curr.answer}</p>
    </li> 
  )
}

export default ItemList