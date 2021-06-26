import acaiBowlWithSpoon from "../../images/acaiBowlWithSpoon.jpg";
import {
  AboutSection1,
  HomeBackgroudImage,
  Section1Container,
  Section1H1,
  Section1H2,
  Section1Hours,
  AboutSection2,
  Section2Container,
  Section2Wrapper,
} from "./about-elements";
const About = ({ data }) => {
  
  return (
    <>
      <AboutSection1>
        <HomeBackgroudImage src={acaiBowlWithSpoon} />
        <Section1Container>
          <Section1H1>About Us</Section1H1>
          <Section1H2>Açaí and Pitaya bowls</Section1H2>
          <Section1Hours>{data.hours}</Section1Hours>
        </Section1Container>
      </AboutSection1>
      <AboutSection2>
        <Section2Container>
          <Section2Wrapper>{data.about}</Section2Wrapper>
        </Section2Container>
      </AboutSection2>
    </>
  );
};

export default About;
