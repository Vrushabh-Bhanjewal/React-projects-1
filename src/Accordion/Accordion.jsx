import React, { useEffect, useState } from 'react'
import faq from '../API/faq.json'
import style from './accord.module.css'
import ItemList from './ItemList'

function Accordion() {
  const [data,setData] =useState([])
  useEffect(()=>{
    setData(faq)
  },[])

  return (
    <div className={style.center}>
        <div className={style.menu}>
            <h1 className={style.head1}>The Accordion</h1>
            <ol className={style.list}>
            {
              data.map(curr=>{
                return <ItemList key={curr.id} curr={curr}/>
              })
            }  
            </ol>
        </div>
    </div>
  )
}

export default Accordion