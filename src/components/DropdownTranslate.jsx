
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
      <DropdownItem as="a" href="#" onClick={langueFr}>
        Français
      </DropdownItem>
      <DropdownItem as="a" href="#" onClick={langueEn}>
        English
      </DropdownItem>
    </Dropdown>
  );
};

export default DropdownTranslate;
