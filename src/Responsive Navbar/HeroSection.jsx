import React from 'react'
import style from './navbar.module.css'
function HeroSection() {
  return (
    <div className={`${style.hero} ${style.container} ${style.center}`}>
      <figure className={style.img1}>
        <img src="./Access.png" alt="Access" />
      </figure>
      <div className={style.access}>
        <h1>All File In One Secure Location</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus pariatur doloremque explicabo illo nihil cum voluptatem qui aliquid quaerat quidem eius nesciunt commodi rem praesentium provident quas sapiente vel odit deserunt, sed ipsa perspiciatis non. Cumque accusamus deserunt et? Suscipit unde soluta eum deleniti saepe, a corporis. Quas, assumenda!</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default HeroSection