import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterSection1,
  Col1,
  Col2,
  PhoneNumberWrapper,
  PhoneNumber,
  EmailWrapper,
  Email,
  Col3,
  FooterSection2,
  Col4,
  Col5,
  IconsWrapper,
  Facebook,
  Instagram,
  Col6,
} from "./footer-elements";

const Footer = ({ data }) => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterSection1>
            <Col1>#fuelyourwildside</Col1>
            <Col2>
              <PhoneNumberWrapper>
                <PhoneNumber>{data.phoneAlt}</PhoneNumber>
              </PhoneNumberWrapper>
              <EmailWrapper>
                <Email href='mailto:wildsidebowls@gmail.com' >{data.email}</Email>
              </EmailWrapper>
            </Col2>
            <Col3></Col3>
          </FooterSection1>
          <FooterSection2>
            <Col4>{data.address}</Col4>
            <Col5>
              <IconsWrapper href={data.ig}>
                <Instagram />
              </IconsWrapper>
              <IconsWrapper href={data.fb}>
                <Facebook />
              </IconsWrapper>
            </Col5>
            <Col6>Wildside Bowls © {new Date().getFullYear()}</Col6>
          </FooterSection2>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
