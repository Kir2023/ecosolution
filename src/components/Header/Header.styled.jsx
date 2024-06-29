/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SVGLogo = styled.svg`
  width: 269px;
  height: 40px;
  fill: var(--main-text-color);

  &:hover {
    fill: var(--main-color);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const BurgerButton = styled.button`
  background-color: transparent;
`;

export const SVGBurger = styled.svg`
  width: 39px;
  height: 39px;
  fill: var(--button-background-color);

  &:hover {
    fill: var(--main-color);
  }
`;

export const GetInTouchButton = styled.button`
  @media screen and (max-width: 767px) {
    display: none;
  }

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
