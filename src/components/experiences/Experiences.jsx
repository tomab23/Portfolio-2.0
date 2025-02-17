
import { Card, DarkThemeToggle } from "flowbite-react"
import CustomTitle from "../custom/CustomTitle"
import MyExperiences from "./MyExperiences"
import { useTranslation } from "react-i18next"


const Experiences = () => {
  const { i18n } = useTranslation();
  const title = i18n.language === "fr" ?  "Expériences" : "Experiences";

  return (
    <div id="exp">
      <CustomTitle className={"title"}>
        {title}
      </CustomTitle>

      <Card className="mt-8 max-sm:mt-5 bg-light">
      <MyExperiences />
    </Card>

    {/* <div className="mt-10">
      <MyExperiences />
    </div> */}

      


    </div>
  )
}

export default Experiences