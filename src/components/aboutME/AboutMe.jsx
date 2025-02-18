import React from "react";
import LinksAbout from "./LinksAbout";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router";
import MeFr from "./MeFr";
import { useTranslation } from "react-i18next";
import MeEn from "./MeEn";

const AboutMe = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-2 max-md:items-center">
      {/* illustration Développeur by Storyset" */}
      <Card
        theme={{
          root: {
            base: "flex rounded-lg border border-gray-200 bg-light shadow-md dark:border-gray-700 dark:bg-gray-800 p-4 max-sm:p-3",
            children: "flex h-full flex-col gap-4 p-2",
            horizontal: {
              off: "flex-col",
              on: "flex-col-reverse md:max-w-[100%] md:flex-row-reverse max-md:items-center",
            },
          },
          img: {
            horizontal: {
              on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-60 max-md:w-80 md:rounded-none md:rounded-l-lg max-sm:-mt-16",
            },
          },
        }}
        className="max-w-sm"
        imgSrc="/dev.svg"
        horizontal
      >
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="font-goodMatcha">{t("ABOUT.TITLE")}</span>{" "}{t('ABOUT.MORE')}
        </h5>
        {/* CHIDLREN */}
        {i18n.language === "fr" ? <MeFr /> : <MeEn />}
      </Card>

      <LinksAbout />
    </div>
  );
};

export default AboutMe;
