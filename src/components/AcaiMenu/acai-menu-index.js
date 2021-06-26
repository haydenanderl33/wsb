import fruits from "../../images/fruits.jpg";
import {
  MenuSection1,
  HomeBackgroudImage,
  Section1Container,
  Section1H1,
  Section1H2,
  Section1BtnContainer,
  Section1BtnWrapper,
  Section1Btn1,
  Section1Btn2,
  MenuSection2,
  Section2Container,
  Section2Wrapper,
  Section2ItemContainer,
  Section2ImgWrapper,
  Section2Img,
  Section2Name,
  Section2Calories,
  Section2Description,
} from "./menu-elements";
import acaiData from "../../AcaiData";

const AcaiMenu = () => {


  let acaiMenuItems = acaiData;




  return (
    <>
      <MenuSection1>
        <HomeBackgroudImage src={fruits} />
        <Section1Container>
          <Section1H1>Menu</Section1H1>
          <Section1H2>Açaí and Pitaya bowls</Section1H2>
          <Section1BtnContainer>
            <Section1BtnWrapper>
              <Section1Btn1 to='/menu/açaí-bowls'
              >
                Açaí Bowls
              </Section1Btn1>
            </Section1BtnWrapper>
            <Section1BtnWrapper>
              <Section1Btn2 to='/menu/pitaya-bowls'

              >
                Pitaya Bowls
              </Section1Btn2>
            </Section1BtnWrapper>
          </Section1BtnContainer>
        </Section1Container>
      </MenuSection1>
      <MenuSection2>
      
          <Section2Container>
            <Section2Wrapper>
              {acaiMenuItems.map((item) => {
                return (
                  <Section2ItemContainer>
                    <Section2ImgWrapper>
                      <Section2Img src={item.pictureSrc} />
                    </Section2ImgWrapper>
                    <Section2Name>{item.name}</Section2Name>
                    <Section2Calories>
                      {item.calories} calories
                    </Section2Calories>
                    <Section2Description>
                      {item.description}
                    </Section2Description>
                  </Section2ItemContainer>
                );
              })}
            </Section2Wrapper>
          </Section2Container>
     
          {/* <Section2Container>
            <Section2Wrapper>
              {pitayaMenuItmes.map((item) => {
                return (
                  <Section2ItemContainer>
                    <Section2ImgWrapper>
                      <Section2Img src={item.pictureSrc} />
                    </Section2ImgWrapper>
                    <Section2Name>{item.name}</Section2Name>
                    <Section2Calories>
                      {item.calories} calories
                    </Section2Calories>
                    <Section2Description>
                      {item.description}
                    </Section2Description>
                  </Section2ItemContainer>
                );
              })}
            </Section2Wrapper>
          </Section2Container>
         */}
      </MenuSection2>
    </>
  );
};

export default AcaiMenu;
