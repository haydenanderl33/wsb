import { useState } from "react";
import Sidebar from "../SideBar/sidebar-index";
import Navbar from "../Navbar/navbar-index";
import Footer from '../Footer/footer-index'
import data from "../../Data";
import { AboutpageContainer } from "./aboutpage-elements";
import About from "../About/about-index";

const Aboutpage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AboutpageContainer>
        <Sidebar open={open} setOpen={setOpen} data={data} />
        <Navbar open={open} setOpen={setOpen} data={data} />
        <About data={data}/>
        <Footer data={data}/>
      </AboutpageContainer>
    </>
  );
};

export default Aboutpage;
