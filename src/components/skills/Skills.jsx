import { useTranslation } from "react-i18next"
import CustomTitle from "../custom/CustomTitle"


const Skills = () => {

  const { t } = useTranslation();

  return (
    <div id="skills" className="">
      <CustomTitle className={"title"}>{t("TITLE.SKILLS")}</CustomTitle>
    </div>
  )
}

export default Skills