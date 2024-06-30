import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-top: 146px;

  @media screen and (min-width: 768px) {
    margin-top: 164px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;

export const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 65px;
  }

  @media screen and (min-width: 1280px) {
    gap: 296px;
  }
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 43px;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
  }
`;

export const MainHeader = styled.h1`
  font-size: 36px;
  line-height: 36px;
  font-weight: 400;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    max-width: 280px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
    max-width: 485px;
  }
`;

export const MainText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    max-width: 342px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 363px;
  }
`;

export const LearnMoreButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 4px 4px 16px;
  gap: 12px;
  margin: 0 auto;
  width: 144px;
  height: 39px;
  border: 1px solid var(--main-color);
  border-radius: 500px;
  color: var(--main-text-color);
  background: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.04em;

  &:hover {
    color: var(--main-color);
    background: var(--main-text-color);
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const SVGArrow = styled.svg`
  width: 32px;
  height: 32px;
`;

export const HorizontalLine = styled.div`
  margin-top: 24px;
  left: 20px;
  right: 20px;
  height: 1px;
  background-color: var(--main-color);

  @media screen and (min-width: 768px) {
    left: 30px;
    right: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 28px;
    left: 100px;
    right: 100px;
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    padding-top: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 12px;
  }
`;

export const Contacts = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.04em;
`;

export const Email = styled.a`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.04em;
  color: var(--main-text-color);
`;

export const Copyright = styled.p`
  @media screen and (max-width: 767px) {
    display: none;
  }

  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.04em;
`;

export const MainIMG = styled.img`
  padding-top: 36px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 36px;
  }
`;
