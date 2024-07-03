/* eslint-disable react/prop-types */
import { useEffect, useCallback } from "react";
import {
  BurgerMenuContainer,
  CloseButton,
  Overlay,
  HorizontalLine,
  Navigation,
  NavigationListItem,
  NavigationLink,
  NavigationList,
  SVGClose,
  SVGNavigationArrow,
  SocialMediaList,
  SocialMediaListItem,
  SocialMediaLink,
  SVGSocialMediaIcon,
} from "./BurgerMenu.styled";
import sprite from "../../assets/sprite.svg";

const BurgerMenu = ({
  onClose,
  mainSectionRef,
  aboutSectionRef,
  casesSectionRef,
  faqSectionRef,
  contactUsSectionRef,
  activeLink,
  onLinkClick,
}) => {
  const handleEscKey = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  const handleOverlayClick = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleEscKey]);

  const scrollToSection = (sectionRef, linkName) => {
    if (sectionRef && sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
      onLinkClick(linkName);
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleOverlayClick} />
      <BurgerMenuContainer>
        <CloseButton onClick={onClose}>
          <SVGClose>
            <use href={`${sprite}#icon-close`} />
          </SVGClose>{" "}
          close
        </CloseButton>
        <HorizontalLine />
        <Navigation>
          <NavigationList>
            <NavigationListItem>
              <NavigationLink
                onClick={() => scrollToSection(mainSectionRef, "Main")}
                $isactive={activeLink === "Main"}
              >
                Main
                <SVGNavigationArrow $isactive={activeLink === "Main"}>
                  <use href={`${sprite}#icon-arrow-right`} />
                </SVGNavigationArrow>
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink
                onClick={() => scrollToSection(aboutSectionRef, "About")}
                $isactive={activeLink === "About"}
              >
                About
                <SVGNavigationArrow $isactive={activeLink === "About"}>
                  <use href={`${sprite}#icon-arrow-right`} />
                </SVGNavigationArrow>
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink
                onClick={() => scrollToSection(casesSectionRef, "Cases")}
                $isactive={activeLink === "Cases"}
              >
                Cases
                <SVGNavigationArrow $isactive={activeLink === "Cases"}>
                  <use href={`${sprite}#icon-arrow-right`} />
                </SVGNavigationArrow>
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink
                onClick={() => scrollToSection(faqSectionRef, "FAQ")}
                $isactive={activeLink === "FAQ"}
              >
                FAQ
                <SVGNavigationArrow $isactive={activeLink === "FAQ"}>
                  <use href={`${sprite}#icon-arrow-right`} />
                </SVGNavigationArrow>
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink
                onClick={() =>
                  scrollToSection(contactUsSectionRef, "Contact Us")
                }
                $isactive={activeLink === "Contact Us"}
              >
                Contact Us
                <SVGNavigationArrow $isactive={activeLink === "Contact Us"}>
                  <use href={`${sprite}#icon-arrow-right`} />
                </SVGNavigationArrow>
              </NavigationLink>
            </NavigationListItem>
          </NavigationList>
        </Navigation>
        <SocialMediaList>
          <SocialMediaListItem>
            <SocialMediaLink
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SVGSocialMediaIcon>
                <use href={`${sprite}#icon-facebook`} />
              </SVGSocialMediaIcon>
            </SocialMediaLink>
          </SocialMediaListItem>
          <SocialMediaListItem>
            <SocialMediaLink
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SVGSocialMediaIcon>
                <use href={`${sprite}#icon-instagram`} />
              </SVGSocialMediaIcon>
            </SocialMediaLink>
          </SocialMediaListItem>
        </SocialMediaList>
      </BurgerMenuContainer>
    </>
  );
};

export default BurgerMenu;
