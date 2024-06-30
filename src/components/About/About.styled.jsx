import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AboutHeader = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    width: 272px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 365px;
  }
`;

export const VerticalLine = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  height: 110px;
  width: 1px;
  background-color: var(--main-color);

  @media screen and (min-width: 1280px) {
    height: 87px;
  }
`;

export const AboutText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 459px;
  }
`;

export const ValuesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 36px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 124px;
    gap: 48px;
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  width: calc((100% - 24px) / 2);
  background: #eaedf1;
  border: 1px solid #eaedf1;

  @media screen and (min-width: 768px) {
    width: calc((100% - 48px - 342px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 96px - 596px) / 2);
    padding: 48px 24px;
  }
`;

export const ValueHeaderWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SVGValue = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: var(--main-text-color);

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const ValueHeader = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background: var(--main-color);
  margin-top: 21px;

  @media screen and (min-width: 768px) {
    margin-top: 39px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 86px;
    margin-bottom: 12px;
  }
`;

export const ValueText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: justify;
  letter-spacing: -0.04em;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ValueIMG = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }

  width: 342px;

  @media screen and (min-width: 1280px) {
    width: 596px;
  }
`;
