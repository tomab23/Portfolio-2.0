import { useTranslation } from "react-i18next"
import CustomTitle from "../custom/CustomTitle"
import SkillCard from "./SkillCard";
import { SkillsMock } from "../../models/SkillsMock";


const Skills = () => {

  const { t } = useTranslation();

  return (
    <div id="skills" className="">
      <CustomTitle className={"title"}>{t("TITLE.SKILLS")}</CustomTitle>

      {/* CARD */}
      <div className="mt-10 max-sm:mt-5 flex flex-wrap max-md:justify-center sm:justify-start max-lg:gap-2 xl:gap-5 gap-3">
        {SkillsMock.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills