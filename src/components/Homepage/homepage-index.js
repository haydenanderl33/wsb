import { useState } from "react";
import Navbar from '../Navbar/navbar-index'
import Sidebar from "../SideBar/sidebar-index";
import Home from '../Home/home-index'
import {HomepageContainer} from './homepage-elements'
import data from '../../Data'
import Footer from "../Footer/footer-index";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HomepageContainer>
        <Sidebar open={open} setOpen={setOpen} data={data} />
        <Navbar open={open} setOpen={setOpen} data={data} />
        <Home/>
        <Footer data={data}/>
      </HomepageContainer>
    </>
  );
};

export default Homepage;
