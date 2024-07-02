import styled from "styled-components";

export const FAQWrapper = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    display: block;
  }

  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const FAQHeader = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    position: absolute;
    max-width: 347px;
    top: 0;
    left: 368px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    max-width: 398px;
    left: 768px;
  }
`;

export const QuestionsWrapper = styled.div``;

export const QuestionWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 298px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 544px;
  }
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background: var(--main-color);
`;

export const SVGSymbol = styled.svg`
  max-width: 16px;
  max-height: 16px;
  stroke: var(--main-text-color);

  @media screen and (min-width: 768px) {
    max-width: 28px;
    max-height: 28px;
  }
`;

export const Question = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  letter-spacing: -0.04em;
  margin-top: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
    font-size: 24px;
    line-height: 29px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const Answer = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: justify;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
  margin-left: 24px;

  @media screen and (min-width: 768px) {
    margin-left: 44px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
    margin-left: 52px;
    margin-bottom: 24px;
  }
`;

export const FAQContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 368px;
  }

  @media screen and (min-width: 1280px) {
    left: 768px;
  }
`;

export const FAQText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  letter-spacing: -0.04em;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const ContactButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 39px;
  padding: 10px 16px;
  gap: 12px;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.04em;
  color: var(--main-text-color);
  border-radius: 500px;
  background: var(--main-color);

  &:hover {
    color: var(--main-color);
    background: var(--main-text-color);
  }

  svg {
    fill: var(--main-text-color);
  }

  &:hover svg {
    fill: var(--main-color);
  }
`;

export const SVGArrow = styled.svg`
  width: 14px;
  height: 14px;
`;
