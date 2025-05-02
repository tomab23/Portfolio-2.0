import Place from "./Place";


const MeFr = () => {

  return (
    <div className='flex h-full flex-col justify-center gap-4 font-normal text-gray-700 dark:text-gray-200'>
    <p>
      Je m'appelle <b>Thomas Bartier</b>, Développeur Junior. J'ai obtenu mon diplôme de concepteur développeur d'applications (<b>CDA</b>). Durant mon apprentissage, j'ai surtout fait du React.js et Java. 
    </p>
    <p>
      Passionné par le développement et la technologie, je suis à la recherche de nouvelles opportunités pour enrichir mon expérience. Actuellement, sur des petits projets personnels, j'apprends aussi l'utilisation d'Unreal Engine.
    </p>
    <p> 
      N'hésitez pas à me contacter pour plus d'information. <br/>Je suis <span className='dark:text-available-light text-available-dark font-bold'>disponible immédiatement</span>.
    </p>
    <Place />
    </div>
  )
}

export default MeFr