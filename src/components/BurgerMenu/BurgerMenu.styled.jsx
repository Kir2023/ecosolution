import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
  z-index: 999;
`;

export const BurgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  height: calc(100vh - 72px);
  background-color: rgba(23, 61, 51, 0.75);
  padding-left: 24px;
  padding-top: 81px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  margin-top: 36px;
  margin-bottom: 36px;
  z-index: 1000;

  @media screen and (min-width: 768px) {
    left: auto;
    right: 30px;
    transform: none;
  }

  @media screen and (min-width: 1280px) {
    right: 100px;
    margin-top: 24px;
    margin-bottom: 24px;
    width: 365px;
    height: calc(100vh - 48px);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  left: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.04em;
  background: transparent;
  color: #ffffff;

  &:hover {
    color: var(--main-color);
  }

  svg {
    stroke: #ffffff;
  }

  &:hover svg {
    stroke: var(--main-color);
  }
`;

export const SVGClose = styled.svg`
  height: 20px;
  width: 20px;
`;

export const HorizontalLine = styled.div`
  position: absolute;
  top: 48px;
  left: 24px;
  right: 24px;
  height: 1px;
  background-color: #ffffff;
`;

export const Navigation = styled.nav`
  flex: 1;
`;

export const NavigationList = styled.ul``;

export const NavigationListItem = styled.li``;

export const NavigationLink = styled.a`
  color: rgba(255, 255, 255, 0.25);
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.04em;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 0;

  &: hover {
    color: #ffffff;
  }

  svg {
    stroke: rgba(255, 255, 255, 0.25);
    fill: transparent;
  }

  &: hover svg {
    stroke: #ffffff;
  }
`;

export const SVGNavigationArrow = styled.svg`
  width: 16px;
  height: 16px;
`;

export const SocialMediaList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const SocialMediaListItem = styled.li``;

export const SocialMediaLink = styled.a`
  color: #ffffff;

  &:hover {
    color: var(--main-color);
  }
`;

export const SVGSocialMediaIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: #ffffff;

  &:hover {
    stroke: var(--main-color);
  }
`;
