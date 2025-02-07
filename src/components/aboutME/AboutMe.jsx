import React from 'react'
import LinksAbout from './LinksAbout'

const AboutMe = () => {
  return (
    <div className='flex flex-col'>
      <p>AboutMe</p>
      
      <div className='flex gap-5'>
      <img src="/src/assets/illustrations/dev1.svg" alt="illustration Développeur by UnDraw" className='h-60 w-60'/>
      <span>illustration Développeur by UnDraw</span>
      <img src="/src/assets/illustrations/dev2.svg" alt="illustration Développeur by Storyset" className='h-60 w-60'/>
      <span>illustration Développeur by Storyset</span>
      <img src="/src/assets/illustrations/dev2alt.svg" alt="illustration Développeur by Storyset" className='h-60 w-60'/>
      </div>
      <LinksAbout />
    </div>
  )
}

export default AboutMe