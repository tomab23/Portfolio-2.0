import { useNavigate } from "react-router";
import Place from "./Place";


const MeEn = () => {

    const navigate = useNavigate();

  return (
    <div className='flex h-full flex-col justify-center gap-4 font-normal text-gray-700 dark:text-gray-200 '>
    <p className="">
    My name is <b>Thomas Bartier</b> after discovering development in May 2022 for 5 weeks, I went on a training course for <b> Application Designer and Developer</b> for 8 months.
    </p>
    <p>
    After <b>graduating</b> I joined an incubator and a team for 4 months. 
    I worked on a car sharing project (CoDrive) in a work situation.&nbsp; 
    <a className='hover:underline cursor-pointer italic' onClick={() => navigate("/projects")}>(see my projets)</a>
    </p>
    <p> <b>Today</b>, I am looking for a job and I am <span className='dark:text-available-light text-available-dark font-bold'>available to start immediately</span>.</p>
    <Place />
    </div>
  )
}

export default MeEn