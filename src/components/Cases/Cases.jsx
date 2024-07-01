/* eslint-disable react/display-name */
import { useState, useRef, forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowsWrapper,
  CasesHeader,
  CasesWrapper,
  Counter,
  CounterWrapper,
  Date,
  HorizontalLine,
  SVGArrows,
  SVGSliderArrow,
  Slide,
  SlideHeader,
  SlideHeaderWrapper,
  SlideIMG,
  SlideText,
  SlideTextWrapper,
  SliderWrapper,
  VerticalLine,
} from "./Cases.styled";
import sprite from "../../assets/sprite.svg";
import slide1 from "../../assets/images/slide-1.webp";
import slide2 from "../../assets/images/slide-2.webp";
import slide3 from "../../assets/images/slide-3.webp";
import slide4 from "../../assets/images/slide-4.webp";
import slide5 from "../../assets/images/slide-5.webp";

const slides = [
  {
    img: slide1,
    alt: "Private Enterprise “ZAKHIDNYI BUH”",
    header: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    text: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  {
    img: slide2,
    alt: "Private Enterprise “Bosch”",
    header: "Zhytomyr city Private Enterprise “Bosch”",
    text: "Solar Panels for industrial use",
    date: "November 2023",
  },
  {
    img: slide3,
    alt: "Private Enterprise “Biotech”",
    header: "Rivne city Private Enterprise “Biotech”",
    text: "Thermal modules",
    date: "October 2023",
  },
  {
    img: slide4,
    alt: "Private Enterprise “HealthyFarm”",
    header: "Kherson city Private Enterprise “HealthyFarm”",
    text: "Wind power",
    date: "September 2021",
  },
  {
    img: slide5,
    alt: "Private Enterprise “Biotech”",
    header: "Zaporizhia city Private Enterprise “Biotech”",
    text: "Mini nuclear stations",
    date: "May 2021",
  },
];

const Cases = forwardRef((props, ref) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlideIndex(next),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CasesWrapper ref={ref}>
      <CounterWrapper>
        <CasesHeader>Successful cases of our company</CasesHeader>
        <VerticalLine />
        <Counter>
          {String(activeSlideIndex + 1).padStart(2, "0")}{" "}
          <span>/ {String(slides.length).padStart(2, "0")}</span>
        </Counter>
        <ArrowsWrapper>
          <SVGArrows onClick={() => sliderRef.current.slickPrev()}>
            <use href={`${sprite}#icon-arrow-left-slider`} />
          </SVGArrows>
          <SVGArrows onClick={() => sliderRef.current.slickNext()}>
            <use href={`${sprite}#icon-arrow-right-slider`} />
          </SVGArrows>
        </ArrowsWrapper>
      </CounterWrapper>
      <SliderWrapper>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <SlideIMG src={slide.img} alt={slide.alt} />
              <SlideHeaderWrapper>
                <SlideHeader>{slide.header}</SlideHeader>
                <SVGSliderArrow>
                  <use href={`${sprite}#icon-arrow-slider`} />
                </SVGSliderArrow>
              </SlideHeaderWrapper>
              <HorizontalLine />
              <SlideTextWrapper>
                <SlideText>{slide.text}</SlideText>
                <Date>{slide.date}</Date>
              </SlideTextWrapper>
            </Slide>
          ))}
        </Slider>
      </SliderWrapper>
    </CasesWrapper>
  );
});

export default Cases;
