import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { NavLangContext } from '../context/navLang';
import { useContext } from "react";
function NavHeader() {
  const { selectedLanguage, setSelectedLanguage } = useContext(NavLangContext)
  const watchingListCount = useSelector((state) => state.watchingList.watchingListCount);
  const handleLanguageClick = function(language){
    console.log(`Language clicked: ${language}`);
    
    setSelectedLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }
  return (
    <>
      <Navbar expand="lg" className=" bg-main-color">
        <Container fluid>
          <Link to="/" className="secondary-color">
            Movies app
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <NavDropdown
              title="languages"
              className="me-3 text-dark"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="lang-item " href="#" onClick={() => handleLanguageClick('en')}>En</NavDropdown.Item>
              <NavDropdown.Item className="lang-item " href="#" onClick={() => handleLanguageClick('ar')}>Ar</NavDropdown.Item>
               
               
            
            </NavDropdown>
            <Link className="me-3" to="watchingList">
              <button type="button" className="btn nav-btn main-color bg-secondary-color">
                watching list <span className="badge bg-secondary-color main-color">{watchingListCount}</span>
              </button>
            </Link>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;
