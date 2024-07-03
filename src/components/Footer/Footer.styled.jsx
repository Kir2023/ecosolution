import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background: var(--main-color);
`;

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;

    & > a {
      order: 1;
    }

    & > svg {
      order: 3;
    }

    & > div {
      order: 2;
    }
  }
`;

export const SVGLogo = styled.svg`
  width: 269px;
  height: 40px;
  fill: var(--main-text-color);

  &:hover {
    fill: var(--main-color);
  }
`;

export const SVGArrow = styled.svg`
  rotate: -90deg;
  cursor: pointer;
  width: 32px;
  height: 32px;
  --color1: var(--main-color);
  --color2: var(--main-text-color);

  &:hover {
    --color1: var(--main-text-color);
    --color2: var(--main-color);
  }
`;

export const SocialNetworksWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  width: 100%;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const SocialNetworkLink = styled.a`
  color: var(--main-text-color);

  &:hover {
    color: var(--main-color);
  }
`;

export const SVGSocialNetworksIcons = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--main-text-color);

  &:hover {
    stroke: var(--main-color);
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Address = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.04em;
`;

export const Email = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.04em;
  color: var(--main-text-color);
`;
