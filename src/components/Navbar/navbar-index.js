import { useEffect, useState } from "react";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarColumn1,
  RouterLink,
  NavbarColumn2,
  NavbarColumn3,
  PhoneIcon,
  PhoneNumber,
  NavbarWrapperMobile,
  NavbarMobile1,
  FruitBowl,
  NavbarMobile2,
  HamburgerBtn,
} from "./navbar-elements";

const Navbar = ({ open, setOpen, data }) => {
  const [transparent, setTransparent] = useState(true);
  const toggle = () => setOpen(!open);
  const solidNav = () =>
    window.scrollY >= 80 ? setTransparent(true) : setTransparent(false);

  useEffect(() => {
    window.addEventListener("scroll", solidNav);
  }, []);
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper transparent={transparent}>
          <NavbarColumn1>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/menu/açaí-bowls">Menu</RouterLink>
            <RouterLink to='/about'>About</RouterLink>
          </NavbarColumn1>
          <NavbarColumn2>
            <FruitBowl />
          </NavbarColumn2>
          <NavbarColumn3>
            <PhoneIcon />
            <PhoneNumber>{data.phoneNumber}</PhoneNumber>
          </NavbarColumn3>
        </NavbarWrapper>
        <NavbarWrapperMobile transparent={transparent}>
          <NavbarMobile1>
            <FruitBowl />
          </NavbarMobile1>
          <NavbarMobile2>
            <HamburgerBtn onClick={toggle} />
          </NavbarMobile2>
        </NavbarWrapperMobile>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
