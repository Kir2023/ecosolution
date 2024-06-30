/* eslint-disable react/display-name */
import {
  AboutHeader,
  AboutText,
  AboutTextWrapper,
  AboutWrapper,
  HorizontalLine,
  SVGValue,
  Value,
  ValueHeader,
  ValueHeaderWrapper,
  ValueIMG,
  ValueText,
  ValuesWrapper,
  VerticalLine,
} from "./About.styled";
import sprite from "../../assets/sprite.svg";
import img1 from "../../assets/images/value-img-1.webp";
import img2 from "../../assets/images/value-img-2.webp";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <AboutWrapper ref={ref}>
      <AboutTextWrapper>
        <AboutHeader>Main values of our company</AboutHeader>
        <VerticalLine />
        <AboutText>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&apos;s energy needs.
        </AboutText>
      </AboutTextWrapper>
      <ValuesWrapper>
        <Value>
          <ValueHeaderWrapper>
            <SVGValue>
              <use href={`${sprite}#icon-circle`} />
            </SVGValue>
            <ValueHeader>Openness</ValueHeader>
          </ValueHeaderWrapper>
          <HorizontalLine />
          <ValueText>to the world, people, new ideas and projects</ValueText>
        </Value>
        <Value>
          <ValueHeaderWrapper>
            <SVGValue>
              <use href={`${sprite}#icon-global`} />
            </SVGValue>
            <ValueHeader>Responsibility</ValueHeader>
          </ValueHeaderWrapper>
          <HorizontalLine />
          <ValueText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </ValueText>
        </Value>
        <ValueIMG src={img1} alt="Workers at wind turbines" />
        <ValueIMG src={img2} alt="Worker with solar panels" />
        <Value>
          <ValueHeaderWrapper>
            <SVGValue>
              <use href={`${sprite}#icon-cpu`} />
            </SVGValue>
            <ValueHeader>Innovation</ValueHeader>
          </ValueHeaderWrapper>
          <HorizontalLine />
          <ValueText>
            we use the latest technology to implement non-standard solutions
          </ValueText>
        </Value>
        <Value>
          <ValueHeaderWrapper>
            <SVGValue>
              <use href={`${sprite}#icon-ranking`} />
            </SVGValue>
            <ValueHeader>Quality</ValueHeader>
          </ValueHeaderWrapper>
          <HorizontalLine />
          <ValueText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </ValueText>
        </Value>
      </ValuesWrapper>
    </AboutWrapper>
  );
});

export default About;
