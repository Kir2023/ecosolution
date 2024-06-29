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

const Header = () => {
  return (
    <HeaderWrapper>
      <a href="/">
        <SVGLogo>
          <use href={`${sprite}#icon-logo`} />
        </SVGLogo>
      </a>
      <ButtonsWrapper>
        <BurgerButton type="button">
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
    </HeaderWrapper>
  );
};

export default Header;
