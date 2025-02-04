
import { Dropdown, DropdownItem } from "flowbite-react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const DropdownTranslate = () => {

  const { i18n } = useTranslation();
  
  const langueEn = () => {
    i18n.changeLanguage("en")
  }

  const langueFr = () => {
    i18n.changeLanguage("fr")
  }

  return (
    <Dropdown dismissOnClick={true} label={<Globe className="h-4 w-4" />} size="sm">
      <DropdownItem onClick={langueFr} className="font-devgothic text-xl">
        Français
      </DropdownItem>
      <DropdownItem onClick={langueEn} className="font-devgothic text-xl">
        English
      </DropdownItem>
    </Dropdown>
  );
};

export default DropdownTranslate;
