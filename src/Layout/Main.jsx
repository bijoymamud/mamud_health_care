import { Link, Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Container from "../components/container"
import Footer from "../components/Footer/Footer";
import NavContainer from "../components/Navbar/NavContainer";
const Main = () => {

  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('dashboard')

  return (
      <div className="relative">
       <div className="shadow-lg sticky top-0 bg-white z-50">
  <Container>
   {noHeaderFooter || <Navbar/>}
  </Container>
      </div>
      {noHeaderFooter || <NavContainer/>}

      <Outlet />

      {noHeaderFooter || <Footer/>}
      
    </div>
  )
}

export default Main
