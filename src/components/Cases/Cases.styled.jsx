import styled from "styled-components";

export const CasesWrapper = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const CasesHeader = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    max-width: 264px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    max-width: 398px;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Counter = styled.p`
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
  text-align: justify;
  letter-spacing: -0.04em;
  padding-top: 24px;

  span {
    color: rgba(23, 61, 51, 0.25);
  }

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;

export const VerticalLine = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  width: 1px;
  height: 65px;
  background: var(--main-color);

  @media screen and (min-width: 1280px) {
    height: 96px;
  }
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const SVGArrows = styled.svg`
  width: 66px;
  height: 66px;
  fill: transparent;
  stroke: var(--main-text-color);

  &:hover {
    stroke: var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    width: 84px;
    height: 84px;
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 26px;

  .slick-track {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    margin-top: 38px;

    .slick-slide {
      margin-right: 0;
      max-width: calc((100vw - 84px) / 2);
      box-sizing: border-box;
    }

    .slick-current {
      margin-right: 15px;
      margin-left: -9px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;

    .slick-slide {
      margin-right: 0;
      width: calc((100vw - 248px) / 2);
    }

    .slick-current {
      margin-right: 40px;
      margin-left: -8px;
    }
  }
`;

export const Slide = styled.div`
  background: #eaedf1;
`;

export const SlideIMG = styled.img`
  width: 100%;
`;

export const SlideHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 12px;

  @media screen and (min-width: 768px) {
    min-height: 120px;
  }

  @media screen and (min-width: 1280px) {
    padding: 36px 48px;
  }
`;

export const SlideHeader = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
  letter-spacing: -0.04em;
  width: 150px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    width: 174px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 29px;
    width: 269px;
  }
`;

export const SVGSliderArrow = styled.svg`
  width: 60px;
  height: 60px;
  --color1: var(--main-color);
  --color2: var(--main-text-color);

  &:hover {
    --color1: var(--main-text-color);
    --color2: var(--main-color);
  }
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background: var(--main-color);
  margin-left: 12px;
  margin-right: 12px;

  @media screen and (min-width: 1280px) {
    margin-left: 48px;
    margin-right: 48px;
  }
`;

export const SlideTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;

  @media screen and (min-width: 1280px) {
    padding: 24px 48px 36px 48px;
  }
`;

export const SlideText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: justify;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: justify;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
