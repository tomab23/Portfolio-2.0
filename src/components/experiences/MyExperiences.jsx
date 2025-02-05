import { useTranslation } from "react-i18next";
import CustomExperience from "./CustomExperience";

const MyExperiences = () => {

    const { t } = useTranslation();

  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-10">
    {/* EXP incubateur */}
    <li>
      <CustomExperience
        latest="true"
        // title={`${t("experience.incubateur.name")} | 1formation=1job`}
        // date={t("experience.incubateur.date")}
        title={"Incubateur numérique | 1formation=1job"}
        date= "Avril à Août 2023"
      >
        <p>
        {/* {t("experience.incubateur.resume")} */} Mise en situation professionnelle, travail sur une application de covoiturage.
        </p>
        <p className="italic">
        {/* {t("experience.tech")}  */}
        : Java JEE, Spring boot 3, React.js,
          Tailwind, MariaDb, Email.js, Stripe, Formik, Yup
        </p>
        <p className="text-sm">
        {/* {t("experience.incubateur.job")} */} Développement fullstack sur la gestion des trajets, sur les réservations, sur la gestions des crédits et sur le formulaire de contact.
        </p>
      </CustomExperience>
    </li>
    {/* EXP stage cda */}
  
  </ol>
  )
}

export default MyExperiences