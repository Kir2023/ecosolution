import styled from "styled-components";

export const ElectricityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const ElectricityHeader = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 48px;
  background: var(--main-color);

  @media screen and (min-width: 768px) {
    height: 87px;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const Counter = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
  color: var(--main-color);

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
  }
`;

export const UnitOfMeasurement = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;
