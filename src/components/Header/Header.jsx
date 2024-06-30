/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BurgerButton,
  ButtonsWrapper,
  GetInTouchButton,
  HeaderWrapper,
  SVGArrow,
  SVGBurger,
  SVGLogo,
} from "./Header.styled";
import sprite from "../../assets/sprite.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = ({ mainSectionRef, aboutSectionRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const resetActiveLinkAndScrollTop = () => {
    setActiveLink("");
    window.scrollTo(0, 0);
  };

  return (
    <HeaderWrapper>
      <Link to="/" onClick={resetActiveLinkAndScrollTop}>
        <SVGLogo>
          <use href={`${sprite}#icon-logo`} />
        </SVGLogo>
      </Link>
      <ButtonsWrapper>
        <BurgerButton type="button" onClick={toggleMenu}>
          <SVGBurger>
            <use href={`${sprite}#icon-burger`} />
          </SVGBurger>
        </BurgerButton>
        <GetInTouchButton>
          Get in touch
          <SVGArrow>
            <use href={`${sprite}#icon-arrow-down`} />
          </SVGArrow>
        </GetInTouchButton>
      </ButtonsWrapper>
      {isMenuOpen && (
        <BurgerMenu
          onClose={closeMenu}
          mainSectionRef={mainSectionRef}
          aboutSectionRef={aboutSectionRef}
          activeLink={activeLink}
          onLinkClick={handleLinkClick}
        />
      )}
    </HeaderWrapper>
  );
};

export default Header;
