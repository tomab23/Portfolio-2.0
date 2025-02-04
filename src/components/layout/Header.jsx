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
    <Navbar fluid>
      <NavbarBrand href="">
        <h1
          onClick={() => navigate("/")}
          className="self-center whitespace-nowrap text-xl max-sm:text-sm font-semibold hover:scale-y-125 dark:text-white"
        >
          {text}
        </h1>
      </NavbarBrand>
      <div className="flex md:order-2">
        <div className="flex gap-5 max-sm:gap-2 items-center">
          <DropdownTranslate />
          <DarkThemeToggle />
        </div>
        {home && <NavbarToggle />}
      </div>
      {home && (
        <NavbarCollapse>
          <NavbarLink href="#about">About me</NavbarLink>
          <NavbarLink href="#skills">skills</NavbarLink>
          <NavbarLink href="#projects">Projects</NavbarLink>
          <NavbarLink href="#exp">Experiences</NavbarLink>
          <NavbarLink href="#contact">Contact</NavbarLink>
        </NavbarCollapse>
      )}
    </Navbar>
  );
};

export default Header;
