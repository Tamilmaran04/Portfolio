import React from 'react'
import "./Header.css"
import {Link} from "react-scroll"
const Header = () => {
  return (
    <>
    <header>
        <nav>
            <h1>Personal <span className='header__right'>PortFolio</span></h1>
            <ul>
                <Link to="Myself" className='li1'><li>Myself</li></Link>
                <Link to="Skill" className='li1'><li>Skillset</li></Link>
                {/* <Link to="Project" className='li1'><li>Project</li></Link> */}
                <Link to="Contact" className='li1'><li>Contact</li></Link>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header