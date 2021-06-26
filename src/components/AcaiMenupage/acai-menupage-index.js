import { useState } from "react";
import Navbar from "../Navbar/navbar-index";
import Sidebar from "../SideBar/sidebar-index";
import AcaiMenu from '../AcaiMenu/acai-menu-index'
import Footer from '../Footer/footer-index'
import data from "../../Data";
import { MenupageContainer } from "./acai-menupage-elements";

const Menupage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenupageContainer>
        <Sidebar open={open} setOpen={setOpen} data={data} />
        <Navbar open={open} setOpen={setOpen} data={data} />
        <AcaiMenu/>
        <Footer data={data}/>
      </MenupageContainer>
    </>
  );
};

export default Menupage;
