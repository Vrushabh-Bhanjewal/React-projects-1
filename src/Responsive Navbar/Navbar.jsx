import React, { useState } from 'react'
import style from './navbar.module.css'
import { IoMdMenu } from "react-icons/io";

function Navbar() {
    const [ismenu,setmenu] = useState(false)
    const handleMenuToggle=()=>{
        setmenu(!ismenu)
    }
  return (
    <header className={style.header}>
        <div className={`${style.container} ${style.nav}`}>
            <div className={style.logo}>Vrushabh</div>
            <div className={ismenu ? style[`web-mob`] : style['web-big']}>
                <ul  className={style.list}>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Service</li>
                    <li>About</li>
                </ul>
            </div>
            <button 
            className={` ${style.menuBtn}`} 
            onClick={handleMenuToggle}
            ><IoMdMenu /></button>
        </div>
    </header>
  )
}

export default Navbar