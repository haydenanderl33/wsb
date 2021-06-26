import styled from "styled-components";

export const AboutSection1 = styled.div`
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
export const Section1Hours = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 16px;
    padding: 0 24px;
  }
  @media screen and (max-width: 468px) {
    font-size: 16px;
  }
`;
export const AboutSection2 = styled.div`
  height: auto;
  width: 100%;
`;
export const Section2Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 24px 128px;
  background: #b2ceec;
  @media screen and (max-width: 800px) {
    padding: 24px;
  }
`;
export const Section2Wrapper = styled.div`
  display: flex;
text-align: center;
  background: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 24px;

  @media screen and (max-width: 800px) {
    padding: 24px;
  }
`;
