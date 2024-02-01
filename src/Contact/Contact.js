import React from 'react'
import "./Contact.css"
import { Element } from 'react-scroll';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Contact = () => {
  return (
    <>
    <Element name="Contact">
    <footer>
        <div className='Contact'>

        <div className='email'>
            <p><CallIcon/>Contact</p>
            <p>8838174235</p>
         </div>
         
        <div className='email'>
            <p><EmailIcon/>Email</p>
            <p>tamilmaran200304@gmail.com</p>
        </div>
        
        <div className='email'>
            <p><LinkedInIcon/>Linked IN</p>
            <p><a href="https://www.linkedin.com/in/tamilmaran04/">https://www.linkedin.com/in/tamilmaran04/</a></p>
        </div>

        <div className='email'>
            <p><GitHubIcon />Github</p>
            <p><a href="https://github.com/Tamilmaran04">https://github.com/Tamilmaran04</a></p>
        </div>
        <div className='Copyright'>
            <p>&#169;Copy right</p>
        </div>
        </div>
    </footer>
    </Element>
    </>
  )
}

export default Contact