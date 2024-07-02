/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import {
  Contacts,
  ContactsWrapper,
  Copyright,
  Email,
  HorizontalLine,
  LearnMoreButton,
  MainHeader,
  MainIMG,
  MainText,
  MainTextWrapper,
  MainWrapper,
  ParagraphWrapper,
  SVGArrow,
} from "./Main.styled";
import sprite from "../../assets/sprite.svg";
import img from "../../assets/images/main-img.webp";

const Main = forwardRef((props, ref) => {
  const scrollToCases = () => {
    if (props.casesSectionRef.current) {
      props.casesSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MainWrapper ref={ref}>
      <MainTextWrapper>
        <MainHeader>Renewable energy for any task</MainHeader>
        <ParagraphWrapper>
          <MainText>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </MainText>
          <LearnMoreButton onClick={scrollToCases}>
            Learn more
            <SVGArrow>
              <use href={`${sprite}#icon-big-arrow-right`} />
            </SVGArrow>
          </LearnMoreButton>
        </ParagraphWrapper>
      </MainTextWrapper>
      <HorizontalLine />
      <ContactsWrapper>
        <Contacts>79005, Ukraine, Lviv, street Shota Rustaveli, 7</Contacts>
        <Email href="mailto:office@ecosolution.com">
          office@ecosolution.com
        </Email>
        <Copyright>ecosolution © 2023</Copyright>
      </ContactsWrapper>
      <MainIMG src={img} alt="Wind turbines" />
    </MainWrapper>
  );
});

export default Main;
