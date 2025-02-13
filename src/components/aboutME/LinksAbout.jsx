import React from 'react'
import CustomLinkButton from '../custom/buttons/CustomLinkButton'

const LinksAbout = () => {
  return (
    <div className='flex gap-2'>
      {/* CV */}
      <CustomLinkButton title={"CV"} link={false} page={"cv"} classname={"bg-gray-500 dark:bg-gray-500 w-[4.5rem]"} />
      {/* Linkedin */}
      <CustomLinkButton title={"LinkedIn"} link={true} page={"https://www.linkedin.com/in/thomas-bartier-185752138/"} classname={"bg-[#0e76a8] dark:bg-[#0e76a8] "} />
      {/* Github */}
      <CustomLinkButton title={"GitHub"} link={true} page={"https://github.com/tomab23"} classname={"bg-[#171515] dark:bg-[#171515]"} />
      {/* Mes Projets */}
      <CustomLinkButton title={"Mes projets"} link={false} page={"projects"} classname={"bg-teal-600 dark:bg-teal-600"} />
    </div>
  )
}

export default LinksAbout