import { useState } from "react";
import {
  HomeSection1,
  HomeBackgroudImage,
  Section1Container,
  Section1H1,
  Section1H2,
  Section1BtnContainer,
  Section1BtnWrapper,
  Section1Btn,
  ShortArrow,
  LongArrow,
} from "./home-elements";
import acaiBowl from "../../images/acaiBowl.jpg";

const Home = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HomeSection1>
        <HomeBackgroudImage src={acaiBowl} />
        <Section1Container>
          <Section1H1>Wildside Bowls</Section1H1>

          <Section1H2>Açaí and Pitaya bowls</Section1H2>
          <Section1BtnContainer>
            <Section1BtnWrapper
              to="/menu/açaí-bowls"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              <Section1Btn to="/menu/açaí-bowls">Menu</Section1Btn>
              {hover ? <LongArrow /> : <ShortArrow />}
            </Section1BtnWrapper>
          </Section1BtnContainer>
        </Section1Container>
      </HomeSection1>
    </>
  );
};

export default Home;
