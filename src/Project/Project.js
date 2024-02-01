import React from 'react'
import "./Project.css"
import {LinearProgress} from "@mui/material"
import skills from "../imag/skills.jpg"
import { Element } from 'react-scroll'
const Project = () => {
  return (
    <>
    <Element name="Skill">
    <div className='Project__main'>
        
    <div className='imgweb'>
        <img src={skills} alt="web"/>
    </div>

    <div className='project'>
        <h1>Skills</h1>

    <div className='skills__html para'>
        <p>HTML</p>
        <LinearProgress variant={'determinate'} value={95} className='skills'/>
    </div>

    <div className='skills__css para'>
        <p>CSS</p>
        <LinearProgress variant={'determinate'} value={90} className='skills'/>
    </div>

    <div className='skills__javascript para'>
        <p>JAVASCRIPT</p>
        <LinearProgress variant={'determinate'} value={75} className='skills'/>
    </div>

    <div className='skills__reactjs para'>
        <p>REACT JS</p>
        <LinearProgress variant={'determinate'} value={70} className='skills'/>
    </div>

    </div>

    </div>
    </Element>
    </>
  )
}

export default Project