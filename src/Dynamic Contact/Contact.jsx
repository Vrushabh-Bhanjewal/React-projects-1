import React from 'react'
import NavBar from '../Responsive Navbar/Navbar'
import HeroSection from '../Responsive Navbar/HeroSection'
import style from './contact.module.css'
import ContactBox from './ContactBox'
import contData from '../API/ContData.json'

function Contact() {

  return (
    <div>
        <NavBar />
        <HeroSection />
        <div className={style.cont}> 
            <div className={`${style.container} ${style.contact}`}>
                {
                    contData.map(curr=>{
                        return <ContactBox key={curr.icon} curr={curr}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Contact