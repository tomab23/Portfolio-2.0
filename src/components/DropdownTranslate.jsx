
import { Dropdown, DropdownItem } from "flowbite-react";
import { Globe } from "lucide-react";

const DropdownTranslate = () => {

  return (
    <Dropdown dismissOnClick={true} label={<Globe className="h-4 w-4" />} size="sm">
      <DropdownItem as="a" href="#">
        Français
      </DropdownItem>
      <DropdownItem as="a" href="#">
        English
      </DropdownItem>
    </Dropdown>
  );
};

export default DropdownTranslate;
