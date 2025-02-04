import { useTranslation } from "react-i18next"
import CustomTitle from "../custom/CustomTitle"


const Skills = () => {

  const { t } = useTranslation();

  return (
    <div id="skills">
      <CustomTitle className={"text-3xl mt-5 mb-10"}>{t("TITLE.SKILLS")}</CustomTitle>
    </div>
  )
}

export default Skills