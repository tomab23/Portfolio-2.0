import { useNavigate } from "react-router"
import Place from "./Place";


const MeFr = () => {

    const navigate = useNavigate();

  return (
    <div className='flex h-full flex-col justify-center gap-4 font-normal text-gray-700 dark:text-gray-200'>
    <p className="">
    Je m'appelle <b>Thomas Bartier</b> après avoir découvert le développement en mai 2022 pendant 5 semaines, je suis partie sur une <b>CDA</b> (formation concepteur développeur d'applications) durant 8 mois.
    </p>
    <p className="">
    Après <b>obtention du diplôme</b> j'ai intégré un incubateur et une équipe pendant 4 mois où j'ai travaillé sur un projet de covoiturage (CoDrive) en mise en situation professionnelle.&nbsp; 
    <a className='hover:underline cursor-pointer italic' onClick={() => navigate("/projects")}>(voir mes projets)</a>
    </p>
    <p> Je suis <span className='dark:text-available-light text-available-dark font-bold'>disponible immédiatement</span>.</p>
    <Place />
    </div>
  )
}

export default MeFr