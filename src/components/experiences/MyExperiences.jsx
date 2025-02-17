import { useTranslation } from "react-i18next";
import { ExperiencesMockFr } from "../../models/ExperiencesMockFr";
import { ExperiencesMockEn } from "../../models/ExperiencesMockEn";
import CustomExperience from "./CustomExperience";

const MyExperiences = () => {

    const { t, i18n } = useTranslation();

    const mock = i18n.language === "fr" ? ExperiencesMockFr : ExperiencesMockEn;

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {mock.map((exp) => (
              <li key={exp.id}>
                <CustomExperience  experience={exp} />
              </li>
            )).reverse()}
  
  </ol>
  )
}

export default MyExperiences