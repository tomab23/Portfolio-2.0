import {
  Button,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import DropdownTranslate from "../DropdownTranslate";
import { useNavigate } from "react-router";

const Header = ({ home }) => {
  const navigate = useNavigate();

  const text = "<Thomas Bartier />";

  return (
    <Navbar fluid className="dark:bg-dark-dark sticky top-0 z-50">
      <NavbarBrand className="font-devgothic">
        <h1
          className="self-center whitespace-nowrap text-3xl max-lg:text-xl max-md:text-2xl font-semibold hover:scale-y-125 dark:text-white"
        >
          {text}
        </h1>
      </NavbarBrand>
      <div className="flex md:order-2 ">
        <div className="flex gap-5 max-sm:gap-2 items-center">
          <DropdownTranslate />
          <DarkThemeToggle />
        </div>
        {home && <NavbarToggle />}
      </div>
      {home && (
        <NavbarCollapse className="font-devgothic">
          <NavbarLink className="text-2xl max-lg:text-xl" href="#about">About me</NavbarLink>
          <NavbarLink className="text-2xl max-lg:text-xl" href="#skills">skills</NavbarLink>
          <NavbarLink className="text-2xl max-lg:text-xl" href="#projects">Projects</NavbarLink>
          <NavbarLink className="text-2xl max-lg:text-xl" href="#exp">Experiences</NavbarLink>
          <NavbarLink className="text-2xl max-lg:text-xl" href="#contact">Contact</NavbarLink>
        </NavbarCollapse>
      )}
    </Navbar>
  );
};

export default Header;
