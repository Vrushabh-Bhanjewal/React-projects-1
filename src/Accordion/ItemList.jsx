import React, { useState } from 'react'
import style from './accord.module.css'
function ItemList({curr,isActive,onToggle}) {
      
  return (
    <li className={style[`main-item`]}> 
        <div className={style.item}>
            <p>{curr.question}</p>
            <button className={`${style.btn} ${isActive && style.close}`} onClick={onToggle}>{isActive ? 'Close' : "Show"}</button>
        </div>
        <p className={style.ans}>{isActive && curr.answer}</p>
    </li> 
  )
}

export default ItemList