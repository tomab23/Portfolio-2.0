
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';


const NetworksFooter = () => {
  return (
    <div className="flex gap-5 justify-end max-sm:justify-center w-40">
    <a
      href="https://github.com/tomab23"
      title="Github"
      target="_blank"
      className="cursor-pointer hover:scale-110"
    >
      <Github/>
    </a>
    <a
      href="https://www.linkedin.com/in/thomas-bartier-185752138/"
      title="LinkedIn"
      target="_blank"
      className="cursor-pointer hover:scale-110"
    >
      <Linkedin/>
    </a>
    {/* <a
      href="https://twitter.com/toma_23_"
      title="X"
      target="_blank"
      className="cursor-pointer hover:scale-110"
    >
      <Twitter/>
    </a> */}
  </div>
  )
}

export default NetworksFooter