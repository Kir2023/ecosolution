import styled, { css } from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const ContactUsWrapper = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const ContactsHeader = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const BigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    margin-top: 40px;
  }
`;

export const ContactsWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 244px;
  }

  @media screen and (min-width: 1280px) {
    width: 486px;
  }
`;

export const ContactsHeaders = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
  letter-spacing: -0.04em;
`;

export const SVGContacts = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--main-text-color);
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

export const PhoneEmailLinks = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
  letter-spacing: -0.04em;
  color: var(--main-text-color);

  &:hover svg {
    stroke: var(--main-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Address = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;

    span {
      width: 212px;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 29px;

    span {
      width: 444px;
    }
  }
`;

export const SocialNetworksWrapper = styled.div`
  display: flex;
  column-gap: 24px;
`;

export const SocialNetworksLink = styled.a`
  color: var(--main-text-color);

  &:hover {
    color: var(--main-color);
  }
`;

export const SVGSocialNetworks = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--main-text-color);

  &:hover {
    stroke: var(--main-color);
  }
`;

export const FormWrapper = styled.div``;

export const StyledForm = styled(Form)`
  padding: 36px 12px;
  background-color: #eaedf1;
  position: relative;
  width: 100%;
  height: 559px;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: justify;
    letter-spacing: -0.04em;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
    padding: 36px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 623px;
    height: 598px;
    padding: 48px;
  }
`;

export const StyledField = styled(Field)`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--main-color);
  ont-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.04em;
  color: var(--main-text-color);
  width: 100%;
  padding: 8px 0;
  margin-bottom: 28px;
  resize: none;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.$haserror === "true" &&
    css`
      border-bottom-color: #d28b8b;
    `}

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  max-height: 14px;
  margin-top: -16px;
  text-align: right;
  letter-spacing: -0.04em;
  color: #d28b8b;
`;

export const SubmitFormButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 4px 4px 16px;
  gap: 12px;
  width: 99px;
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
    right: 24px;
  }

  @media screen and (min-width: 1280px) {
    bottom: 48px;
    right: 48px;
  }
`;

export const SVGArrow = styled.svg`
  width: 32px;
  height: 32px;
`;
