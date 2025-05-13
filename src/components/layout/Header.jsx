import {
  DarkThemeToggle,
  Navbar,
  // NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import DropdownTranslate from "../DropdownTranslate";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Header = ({ home }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const text = "<Thomas Bartier />";

  return (
    <Navbar fluid className="dark:bg-dark-dark sticky top-0 z-50 bg-light">
      <div className="font-devgothic">
        {home ? (
        <h1
        className={`self-center whitespace-nowrap text-3xl max-lg:text-xl max-md:text-2xl font-semibold hover:scale-y-125 dark:text-white cursor-default`}
      >
        {text}
      </h1>
        ) : (
          <h1
          className={`self-center whitespace-nowrap text-3xl max-lg:text-xl max-md:text-2xl font-semibold hover:scale-y-125 dark:text-white cursor-pointer`}
          onClick={() => navigate("/")}
        >
          {text}
        </h1>
        )}
      </div>
      <div className="flex md:order-2 ">
        <div className="flex gap-5 max-sm:gap-2 items-center">
          <DropdownTranslate />
          <DarkThemeToggle />
        </div>
        {home && <NavbarToggle />}
      </div>
      {home && (
        <NavbarCollapse className="font-devgothic">
          <NavbarLink className="text-2xl max-lg:text-xl" href="#about">{t("TITLE.ABOUT")}</NavbarLink>
          <NavbarLink className="text-2xl max-lg:text-xl" href="#skills">{t("TITLE.SKILLS")}</NavbarLink>
          <NavbarLink className="text-2xl max-lg:text-xl" href="#projects">{t("TITLE.PROJECTS")}</NavbarLink>
          <NavbarLink className="text-2xl max-lg:text-xl" href="#exp">{t("TITLE.EXP")}</NavbarLink>
          <NavbarLink className="text-2xl max-lg:text-xl" href="#contact">Contact</NavbarLink>
        </NavbarCollapse>
      )}
    </Navbar>
  );
};

export default Header;
