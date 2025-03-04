import React from 'react'
import style from './home.module.css'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <div className={style.center}>
        <div className={style.menu}>
            <h1 className={style.head1}>React Projects </h1>
            <ul className={style.list}>
                <li><NavLink className={style.link} to={'/Accordion'}>Accordion</NavLink></li>
                <li><NavLink className={style.link} to={'/Site'}>Responsive Navbar</NavLink></li>
                <li><NavLink className={style.link} to={'/Contact'}>Dynamic Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Home