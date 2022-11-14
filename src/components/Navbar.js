import React from 'react'
import Linkedin from '../imgs/icons/linkedin.svg'
import Mail from '../imgs/icons/mail.svg'

export default function Navbar(){
    return (
        <nav>
            <h1 className='name'>Raphael Galdino</h1>
            <h2 className='job-title'>Frontend Developer</h2>
            <div className='buttons'>
                <a className='buttons-email' href = "mailto:raphael.galdino.s@hotmail.com" ><img src={Mail} alt="mail logo" />Email</a>
                <a className='buttons-linkedln' href='https://www.linkedin.com/in/raphael-galdino-silva-costa-431aa0191/' target="_blank"><img src={Linkedin} alt="Linkedln logo"/>Linkedln</a>
            </div>
        </nav>
    )
} 