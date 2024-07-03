/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Address,
  AddressWrapper,
  Email,
  FooterWrapper,
  HorizontalLine,
  NavigationWrapper,
  SVGArrow,
  SVGLogo,
  SVGSocialNetworksIcons,
  SocialNetworkLink,
  SocialNetworksWrapper,
} from "./Footer.styled";
import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";

const Footer = ({ mainSectionRef }) => {
  const [activeLink, setActiveLink] = useState("");

  const resetActiveLinkAndScrollTop = () => {
    setActiveLink("");
    window.scrollTo(0, 0);
  };

  const handleScrollToMain = () => {
    if (mainSectionRef && mainSectionRef.current) {
      const headerOffset = 100;
      const elementPosition =
        mainSectionRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <FooterWrapper>
      <HorizontalLine />
      <NavigationWrapper>
        <Link to="/" onClick={resetActiveLinkAndScrollTop}>
          <SVGLogo>
            <use href={`${sprite}#icon-logo`} />
          </SVGLogo>
        </Link>
        <SVGArrow onClick={handleScrollToMain}>
          <use href={`${sprite}#icon-big-arrow-right`} />
        </SVGArrow>
        <SocialNetworksWrapper>
          <SocialNetworkLink
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGSocialNetworksIcons>
              <use href={`${sprite}#icon-facebook`} />
            </SVGSocialNetworksIcons>
          </SocialNetworkLink>
          <SocialNetworkLink
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGSocialNetworksIcons>
              <use href={`${sprite}#icon-instagram`} />
            </SVGSocialNetworksIcons>
          </SocialNetworkLink>
        </SocialNetworksWrapper>
      </NavigationWrapper>
      <AddressWrapper>
        <Address>79005, Ukraine, Lviv, street Shota Rustaveli, 7</Address>
        <Email href="mailto:office@ecosolution.com">
          office@ecosolution.com
        </Email>
        <Address>ecosolution © 2023</Address>
      </AddressWrapper>
    </FooterWrapper>
  );
};

export default Footer;
