import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import EducationFlatform from "../components/educationFlatform/EducationFlatform";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

function MainLayout() {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
