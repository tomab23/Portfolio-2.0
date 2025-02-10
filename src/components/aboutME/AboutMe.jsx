import React from 'react'
import LinksAbout from './LinksAbout'

const AboutMe = () => {
  return (
    <div className='flex flex-col'>
      <p>AboutMe</p>
      
      <div className='flex flex-wrap gap-5'>
      <img src="/src/assets/illustrations/dev.svg" alt="illustration Développeur by Storyset" className='h-60 w-60'/>
      <span>illustration Développeur by Storyset</span>
      <img src="/src/assets/illustrations/devAlt.svg" alt="illustration Développeur by Storyset" className='h-60 w-60'/>
      </div>
      <LinksAbout />
    </div>
  )
}

export default AboutMe