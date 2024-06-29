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

const BurgerMenu = ({ onClose }) => {
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
              <NavigationLink href="#">
                Main
                <SVGNavigationArrow>
                  <use href={`${sprite}#icon-arrow-right`} />
                </SVGNavigationArrow>
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink href="#">
                About
                <SVGNavigationArrow>
                  <use href={`${sprite}#icon-arrow-right`} />
                </SVGNavigationArrow>
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink href="#">
                Cases
                <SVGNavigationArrow>
                  <use href={`${sprite}#icon-arrow-right`} />
                </SVGNavigationArrow>
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink href="#">
                FAQ
                <SVGNavigationArrow>
                  <use href={`${sprite}#icon-arrow-right`} />
                </SVGNavigationArrow>
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink href="#">
                Contact Us
                <SVGNavigationArrow>
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
