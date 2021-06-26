import { useState } from "react";
import Navbar from "../Navbar/navbar-index";
import Sidebar from "../SideBar/sidebar-index";
import Footer from '../Footer/footer-index'
import data from "../../Data";
import {PitayaMenuPageContainer} from "./pitaya-menu-elements";
import PitayaMenu from "../PitayaMenu/pitaya-menu-index";

const PitayaMenuPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PitayaMenuPageContainer>
        <Sidebar open={open} setOpen={setOpen} data={data} />
        <Navbar open={open} setOpen={setOpen} data={data} />
        <PitayaMenu/>
        <Footer data={data}/>
      </PitayaMenuPageContainer>
    </>
  );
};

export default PitayaMenuPage;
