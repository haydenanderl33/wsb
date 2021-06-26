import {useState, useEffect} from "react";

import {
  SidebarContainer,
  SidebarWrapper,
  SidebarRowContainer1,
  CancelX,
  SidebarRowContainer2,
  SidebarRowContainer3,
  SidebarRowContainer4,
  LinkContainer,
  LinkText,
  SidebarRowContainer5,
  SidebarRowContainer5Wrapper,
  PhoneNumberWrapper,
  PhoneIcon,
  PhoneNumber,
  EmailWrapper,
  Email,
  SidebarRowContainer6,
  SidebarRowBorderBox,
  IconsContainer,
  IconsWrapper,
  Instagram,
  Facebook,
} from "./sidebar-elements";

const Sidebar = ({ open, setOpen, data }) => {

  const [shift, setShift] = useState(false)
  const toggle = () => setOpen(!open);
  const changeHeight = () => window.scrollY >= 80 ? setShift(true) : setShift(false);
  

useEffect(() => {
  window.addEventListener("scroll", changeHeight);
}, []);

  return (
    <>
      {open ? (
        <>
          <SidebarContainer open={open} >
            <SidebarWrapper shift={shift}>
              <SidebarRowContainer1>
                <CancelX onClick={toggle} />
              </SidebarRowContainer1>
              <SidebarRowContainer2>
                <LinkContainer >
                  <LinkText to='/' onClick={toggle}>Home</LinkText>
                </LinkContainer>
              </SidebarRowContainer2>
              <SidebarRowContainer3>
                <LinkContainer>
                  <LinkText to='/menu/açaí-bowls' onClick={toggle}>Menu</LinkText>
                </LinkContainer>
              </SidebarRowContainer3>
              <SidebarRowContainer4>
                <LinkContainer>
                  <LinkText to='/about' onClick={toggle}>About</LinkText>
                </LinkContainer>
              </SidebarRowContainer4>
              <SidebarRowContainer5>
                <SidebarRowBorderBox>
                  <SidebarRowContainer5Wrapper>
                    <PhoneNumberWrapper>
                      <PhoneIcon />
                      <PhoneNumber>{data.phoneNumber}</PhoneNumber>
                    </PhoneNumberWrapper>
                    <EmailWrapper>
                      <Email>{data.email}</Email>
                    </EmailWrapper>
                  </SidebarRowContainer5Wrapper>
                </SidebarRowBorderBox>
              </SidebarRowContainer5>
              <SidebarRowContainer6>
                <IconsContainer>
                  <IconsWrapper href={data.ig}>
                    <Instagram />
                  </IconsWrapper>
                  <IconsWrapper href={data.fb}>
                    <Facebook />
                  </IconsWrapper>
                </IconsContainer>
              </SidebarRowContainer6>
            </SidebarWrapper>
          </SidebarContainer>
        </>
      ) : null}
    </>
  );
};

export default Sidebar;
