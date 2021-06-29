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
                <PhoneNumber href={`tel:${data.phoneNumber}`}>{data.phoneAlt}</PhoneNumber>
              </PhoneNumberWrapper>
              <EmailWrapper>
                <Email  href={`mailto:${data.email}`} >{data.email}</Email>
              </EmailWrapper>
            </Col2>
            <Col3></Col3>
          </FooterSection1>
          <FooterSection2>
            <Col4 href={`https://www.google.com/maps/place/Wildside+Bowls/@40.5285888,-111.854563,17z/data=!3m1!4b1!4m5!3m4!1s0x87527dc4a935ad33:0xd19e733d7cadd46c!8m2!3d40.5285847!4d-111.8523743`}>{data.address}</Col4>
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
