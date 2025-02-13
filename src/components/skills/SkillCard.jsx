import { Card } from 'flowbite-react'

const SkillCard = ({ skill }) => {

  return (
    <Card className={`w-[8rem] max-lg:w-[7rem] max-sm:w-[6rem] h-[8rem] max-lg:h-[7rem] max-sm:h-[6rem]  hover:scale-105`}
    theme={{
        root : {
            base : "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-dark-dark"
        }
    }}>
    {/* <div className="flex flex-col items-center gap-2 max-sm:gap-2  "> */}
    <img src={skill.img} alt="" title={skill?.title} />
      {/* <p className={`font-bold max-sm:text-sm dark:text-light text-gray-700 w-[8rem] text-center`}>
        {skill.name}
      </p> */}
    {/* </div> */}
    </Card>
  )
}

export default SkillCard