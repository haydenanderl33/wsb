import styled from "styled-components";
import {
  GiHamburgerMenu as Hamburger,
  GiFruitBowl as Fruit,
} from "react-icons/gi";
import { FaPhoneAlt as Phone } from "react-icons/fa";
import { Link as LinkRoute } from "react-router-dom";

export const NavbarContainer = styled.div`
  height: 108px;
  width: 100%;
  position: fixed;
  z-index: 1;
  height: ${({ transparent }) => (transparent ? "84px" : "108px")};
`;
export const NavbarWrapper = styled.div`
  padding: 0 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-column-gap: 24px; */
  transition: transform 1s;
  background: ${({ transparent }) => (transparent ? "#bc4e80" : "transparent")};
  transform: ${({ transparent }) => (transparent ? "translate(0,-20px)" : "0")};

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const NavbarColumn1 = styled.div`
  height: 108px;
  max-width: 400px;
  min-width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 48px;
`;
export const RouterLink = styled(LinkRoute)`
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  padding-left: 24px;

  &:hover {
    color: #b2ceec;
  }
`;

export const NavbarColumn2 = styled.div`
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavbarColumn3 = styled.div`
  height: 108px;
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
  color: #ffffff;
`;

export const PhoneIcon = styled(Phone)`
  font-size: 24px;
`;
export const PhoneNumber = styled.div`
  font-size: 24px;
  padding-left: 24px;
`;

export const NavbarWrapperMobile = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transition: transform 1s;
  background: ${({ transparent }) => (transparent ? "#bc4e80" : "transparent")};
  transform: ${({ transparent }) => (transparent ? "translate(0,-20px)" : "0")};
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
export const NavbarMobile1 = styled.div`
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 24px;
`;
export const FruitBowl = styled(Fruit)`
  font-size: 48px;
  color: #ffffff;

  &:hover {
    /* cursor: pointer;
    color: #b2ceec;
    transition: all 0.2s ease-in-out; */
  }
`;
export const NavbarMobile2 = styled.div`
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 24px;
`;
export const HamburgerBtn = styled(Hamburger)`
  font-size: 48px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    color: #b2ceec;
    transition: all 0.2s ease-in-out;
  }
`;
