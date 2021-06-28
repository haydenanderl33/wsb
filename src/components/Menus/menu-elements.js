import styled from "styled-components";
import {Link as LinkRoute } from 'react-router-dom'

export const MenuSection1 = styled.div`
  display: flex;
  height: 883px;
  width: 100%;
  @media screen and (max-width: 800px) {
    height: 475px;
  }
`;
export const HomeBackgroudImage = styled.img`
  position: relative;
  z-index: -3;
  display: flex;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const Section1Container = styled.div`
  position: absolute;
  display: grid;
  padding-top: 300px;
  grid-template-rows: repeat(3, 1fr);
  height: 883px;
  width: 100%;
  z-index: 0;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 475px;
    padding-top: 175px;
  }
`;
export const Section1H1 = styled.h1`
  color: #ffffff;
  font-family: "Dancing Script", cursive;
  font-size: 96px;
  font: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 64px;
  }
  @media screen and (max-width: 468px) {
    font-size: 32px;
  }
`;

export const Section1H2 = styled.h2`
  font-family: "Dancing Script", cursive;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
export const Section1BtnContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const Section1BtnWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section1Btn1 = styled(LinkRoute)`
display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 36px;
  width: 160px;
  min-width: 128px;
  border: none;
  background: #b2ceec;
  border-radius: 20px;
  padding: 0 8px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    /* visibility: hidden; */
    transition: all 0.2s ease-in-out;
    background: #d8893c;
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (max-width: 800px) {
    height: 24px;
    width: 128px;
    font-size: 16px;
  }
  @media screen and (max-width: 468px) {
    font-size: 16px;
  }
`;
export const Section1Btn2 = styled(LinkRoute)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 36px;
  width: 160px;
  min-width: 128px;
  border: none;
  background: #b2ceec;
  border-radius: 20px;
  padding: 0 8px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    /* visibility: hidden; */
    transition: all 0.2s ease-in-out;
    background: #d8893c;
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (max-width: 800px) {
    height: 24px;
    width: 128px;
    font-size: 16px;
  }
  @media screen and (max-width: 468px) {
    font-size: 16px;
  }
`;


export const MenuSection2 = styled.div`
  height: auto;
  width: 100%;
`;
export const Section2Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 24px 48px;
  background: #b2ceec;
  @media screen and (max-width: 800px) {
   padding: 24px;
  }
`;
export const Section2Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  /* grid-template-rows: repeat( 4, minmax(200px, 1fr)); */
  grid-gap: 48px;
  @media screen and (max-width: 1048px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
`;
export const Section2ItemContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #ffffff;
  grid-template-rows: repeat(4, 1fr 0.5fr 0.5fr 0.5fr);
  border-radius: 20px;
`;
export const Section2ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 5px;
`;
export const Section2Img = styled.img`
background: #67666C;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
export const Section2Name = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;
export const Section2Calories = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;
export const Section2Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
`;
