import { useState } from "react";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <a href="/">
        <SVGLogo>
          <use href={`${sprite}#icon-logo`} />
        </SVGLogo>
      </a>
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
      {isMenuOpen && <BurgerMenu onClose={closeMenu} />}
    </HeaderWrapper>
  );
};

export default Header;
