import { Button, DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import DropdownTranslate from "../DropdownTranslate";

const Header = () => {
  return (
    <Navbar fluid>
    <NavbarBrand href="">
      <h1 className="self-center whitespace-nowrap text-xl max-sm:text-sm font-semibold hover:scale-y-125 dark:text-white">THOMAS BARTIER</h1>
    </NavbarBrand>
    <div className="flex md:order-2">
      <div className="flex gap-5 max-sm:gap-2 items-center">
      <DropdownTranslate />
      <DarkThemeToggle />
      </div>
      <NavbarToggle />
    </div>
    <NavbarCollapse>
      <NavbarLink href="#">About me</NavbarLink>
      <NavbarLink href="#">skills</NavbarLink>
      <NavbarLink href="#">Projects</NavbarLink>
      <NavbarLink href="#">Experiences</NavbarLink>
      <NavbarLink href="#">Contact</NavbarLink>
    </NavbarCollapse>
  </Navbar>
  )
}

export default Header