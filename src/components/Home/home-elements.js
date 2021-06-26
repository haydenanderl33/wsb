import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import {
  BsArrowRightShort as Arrow,
  BsArrowRight as Arrow2,
} from "react-icons/bs";

export const HomeSection1 = styled.div`
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
  font-family: 'Dancing Script', cursive;
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
 font-family: 'Dancing Script', cursive;
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
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Section1BtnWrapper = styled(LinkRoute)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 160px;
  background: #b2ceec;
  z-index: 1;

  border-radius: 20px;

  @media screen and (max-width: 468px) {
    height: 24px;
    width: 128px;
  }

  &:hover {
    /* visibility: hidden; */
    transition: all 0.2s ease-in-out;
    background: #d8893c;
    cursor: pointer;
  }
`;
export const Section1Btn = styled(LinkRoute)`
  color: #ffffff;
  display: flex;
  text-decoration: none;

  justify-content: center;
  align-items: center;
  padding: 0 8px;
  border: none;
  background: none;

  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
  @media screen and (max-width: 468px) {
    font-size: 16px;
  }
`;
export const ShortArrow = styled(Arrow)`
  color: #ffffff;
`;
export const LongArrow = styled(Arrow2)`
  color: #ffffff;
`;
