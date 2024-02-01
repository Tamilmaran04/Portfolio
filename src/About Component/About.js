import React from 'react';
import "./About.css";
import { Element } from 'react-scroll';
const About = () => {
  return (
    <>
    <Element name="Myself">

      <main>
        <div className='main__left'>
          <h1>Hi I'm</h1><span>TamilMaran</span>
          <p>I'm a Frontend developer . </p>
          <div className='main__button'>
            <button><a href="Tamilmaran">Download Resume</a></button>
          </div>
        </div>
     </main>

    </Element>
    </>
  )
}

export default About