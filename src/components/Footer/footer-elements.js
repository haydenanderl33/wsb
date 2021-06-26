import styled from "styled-components";
import {
  FaInstagram as Ig,
  FaFacebook as Fb,
  FaPhoneAlt as Phone,
} from "react-icons/fa";

export const FooterContainer = styled.footer`
  height: 100%;
  width: 100%;

  background: linear-gradient(
    108deg,
    rgba(178, 206, 236, 1) 0%,
    rgba(249, 98, 125, 1) 100%
  );
`;
export const FooterWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
  }
`;
export const FooterSection1 = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 200px;
  border-bottom: 2px solid #67666c;
  padding-bottom: 24px;
`;

export const Col1 = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 24px;
  color: #ffffff;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;
export const Col2 = styled.div``;

export const PhoneNumberWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
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

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const EmailWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const Email = styled.a`
  font-size: 24px;
  color: #ffffff;
  padding-top: 24px;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;
export const Col3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /* padding-bottom: 16px; */
`;

export const FooterSection2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  color: #ffffff;
  font-weight: bold;
  @media screen and (max-width: 800px) {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
  }
`;
export const Col4 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  min-width: 255px;

  @media screen and (max-width: 800px) {
    justify-content: space-evenly;
    align-items: center;
    font-weight: bold;
    padding-top: 16px;
  }
`;
export const Col5 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    padding-top: 8px;
  }
`;
export const IconsWrapper = styled.a``;
export const Instagram = styled(Ig)`
  color: #ffffff;
  font-size: 24px;
  z-index: 1;
`;
export const Facebook = styled(Fb)`
  color: #ffffff;
  font-size: 24px;
`;

export const Col6 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  min-width: 255px;

  @media screen and (max-width: 800px) {
    justify-content: space-evenly;
    align-items: center;
    font-weight: bold;
  }
`;
