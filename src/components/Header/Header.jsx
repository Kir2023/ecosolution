/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  SVGLogo,
  ButtonsWrapper,
  BurgerButton,
  SVGBurger,
  GetInTouchButton,
  SVGArrow,
} from "./Header.styled";
import sprite from "../../assets/sprite.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = ({
  mainSectionRef,
  aboutSectionRef,
  casesSectionRef,
  faqSectionRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <HeaderWrapper
      style={{
        backgroundColor: scrollPosition > 0 ? "#EAEDF1" : "transparent",
      }}
    >
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
          casesSectionRef={casesSectionRef}
          faqSectionRef={faqSectionRef}
          activeLink={activeLink}
          onLinkClick={handleLinkClick}
        />
      )}
    </HeaderWrapper>
  );
};

export default Header;
