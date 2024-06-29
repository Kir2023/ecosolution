import "modern-normalize/modern-normalize.css";
import { createGlobalStyle, styled } from "styled-components";

import HeadersFont from "./assets/fonts/Oswald-Regular.ttf";
import ParagraphsFont from "./assets/fonts/FiraSans-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Oswald';
    src: url(${HeadersFont}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Fira Sans';
    src: url(${ParagraphsFont}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  :root{
    --main-color: #97D28B;
    --main-text-color: #173D33;
    --background-color: #EAEDF1;
    --button-background-color: #DCEFD8;
    --HeadersFont: 'Oswald', sans-serif;
    --ParagraphsFont: 'Fira Sans', sans-serif;
    color-scheme: light dark;
  }

  body {
    margin: 0;
    font-family: var(--ParagraphsFont);
    background-color: var(--background-color);
    color: var(--main-text-color);
  }

  p,
  h1,
  h2,
  h3 {
    margin: 0;
    font-family: var(--HeadersFont);
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
  margin-top: 36px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 100px;
    margin-top: 24px;
  }
`;
