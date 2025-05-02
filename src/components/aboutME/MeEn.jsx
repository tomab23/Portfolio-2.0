import Place from "./Place";


const MeEn = () => {

  return (
    <div className='flex h-full flex-col justify-center gap-4 font-normal text-gray-700 dark:text-gray-200 '>
    <p>
    My name is <b>Thomas Bartier</b>, a Junior Developer. I graduated as an <b>Application Developer Designer</b>. During my education I mainly worked with React.js and Java.
    </p>
    <p>
    Passionate about development and technology, I'm looking for new opportunities to enrich my experience. I'm currently working on some small personal projects and I'm also learning how to use Unreal Engine.
    </p>
    <p>
    Don't hesitate to contact me for more information.<br/>
    I am <span className='dark:text-available-light text-available-dark font-bold'>available to start immediately</span>.
    </p>
    <Place />
    </div>
  )
}

export default MeEn