
import { DarkThemeToggle } from "flowbite-react"
import CustomTitle from "../custom/CustomTitle"
import MyExperiences from "./MyExperiences"


const Experiences = () => {
  return (
    <div id="exp">
      <CustomTitle className={"title"}>
        Expériences
      </CustomTitle>

      <MyExperiences />


    </div>
  )
}

export default Experiences