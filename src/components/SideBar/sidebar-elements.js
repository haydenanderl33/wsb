import styled from "styled-components";
import {
  FaWindowClose as Xbtn,
  FaInstagram as Ig,
  FaFacebook as Fb,
  FaPhoneAlt as Phone,
} from "react-icons/fa";
import { Link as LinkRoute } from "react-router-dom";

export const SidebarContainer = styled.aside`

  height: 100vh;
  width: 100%;
  position: fixed;
  /* background-size: cover; */
  z-index: 100;
  background: #b2ceec;
  /* opacity: ${({ open }) => (open ? "1" : "0")};  */
  /* transform: ${({ open }) => (open ? "scale(5)" : "0")}; */
  overflow-y: auto;



  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const SidebarWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(6, 108px);
  transition: transform 1s;
transform: ${({ shift }) => (shift ? "translate(0,-20px)" : "0")};
`;
export const SidebarRowContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 24px;
`;
export const SidebarRowContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SidebarRowContainer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SidebarRowContainer4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CancelX = styled(Xbtn)`
  font-size: 48px;
  color: #ffffff;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #67666c;
    cursor: pointer;
  }
`;

export const LinkContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const LinkText = styled(LinkRoute)`
  font-size: 24px;
  font-weight: bold;
  transition: border-width 0.6s linear;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #67666c;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-bottom: 4px solid #67666c;
    border-width: 5px;
  }
`;
export const SidebarRowContainer5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarRowBorderBox = styled.div`
  height: 100px;
  width: 80%;
  border-top: 2px solid #ffffff;
`;
export const SidebarRowContainer5Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PhoneNumberWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
`;
export const PhoneIcon = styled(Phone)`
  font-size: 24px;
  color: #ffffff;
`;
export const PhoneNumber = styled.p`
  font-size: 24px;
  color: #ffffff;
  padding: 0 24px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const EmailWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Email = styled.div`
  font-size: 24px;
  color: #ffffff;
  padding-top: 24px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;
export const SidebarRowContainer6 = styled.div``;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const IconsWrapper = styled.a`
  padding: 0 24px;
`;
export const Instagram = styled(Ig)`
  color: #ffffff;
  font-size: 24px;
  /* &:hover{
    color: #67666c;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
`;
export const Facebook = styled(Fb)`
  color: #ffffff;
  font-size: 24px;
  /* &:hover{
    color: #67666c;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
`;
