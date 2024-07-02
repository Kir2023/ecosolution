/* eslint-disable react/display-name */
import { useState, forwardRef } from "react";
import {
  Answer,
  ContactButton,
  FAQContactWrapper,
  FAQHeader,
  FAQText,
  FAQWrapper,
  HorizontalLine,
  Question,
  QuestionWrapper,
  QuestionsWrapper,
  SVGArrow,
  SVGSymbol,
} from "./FrequentlyAskedQuestions.styled";
import sprite from "../../assets/sprite.svg";

const FrequentlyAskedQuestions = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleQuestion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <FAQWrapper ref={ref}>
      <FAQHeader>Frequently Asked Questions</FAQHeader>
      <QuestionsWrapper>
        {[...Array(5).keys()].map((index) => (
          <QuestionWrapper key={index}>
            <HorizontalLine />
            <Question>
              <SVGSymbol onClick={() => toggleQuestion(index)}>
                <use
                  href={`${sprite}#icon-${
                    index === activeIndex ? "minus" : "plus"
                  }`}
                />
              </SVGSymbol>
              {index === 0
                ? "How do wind turbines and solar panels work together in a renewable energy system?"
                : index === 1
                ? "What sets EcoSolution's renewable energy solutions apart from others on the market?"
                : index === 2
                ? "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?"
                : index === 3
                ? "What measures does EcoSolution take to ensure the environmental sustainability of its products?"
                : "How does EcoSolution engage with local communities and support a just transition to renewable energy?"}
            </Question>
            <Answer
              style={{ display: index === activeIndex ? "block" : "none" }}
            >
              {index === 0 ? (
                <>
                  Wind turbines and solar panels generate electricity through
                  different mechanisms. Wind turbines harness the kinetic energy
                  of the wind to turn blades, which then drive a generator.
                  Solar panels convert sunlight into electricity through the
                  photovoltaic effect. When integrated into a renewable energy
                  system, these technologies complement each other by providing
                  a continuous and reliable power supply. Wind power is often
                  more abundant during certain times, while solar power is
                  consistent during daylight hours, resulting in a more stable
                  overall energy output.
                </>
              ) : index === 1 ? (
                <>
                  Our renewable energy solutions stand out through a
                  comprehensive approach covering solar, wind, and cutting-edge
                  technologies. We prioritize customization to meet specific
                  needs, uphold environmental stewardship, boast a seasoned team
                  with a proven track record, and maintain a client-centric
                  focus. Choosing EcoSolution means opting for innovative,
                  tailored, and environmentally conscious energy solutions.
                </>
              ) : index === 2 ? (
                <>
                  Businesses and communities gain sustainable advantages by
                  integrating EcoSolution&apos;s renewable energy solutions. Our
                  tailored approach ensures cost-effective, eco-friendly energy
                  solutions, fostering environmental responsibility, reducing
                  long-term operational costs, and promoting energy independence
                  for a resilient future.
                </>
              ) : index === 3 ? (
                <>
                  EcoSolution prioritizes environmental sustainability by
                  employing eco-friendly materials in product manufacturing,
                  minimizing carbon footprint in production processes, and
                  ensuring energy-efficient designs. We are committed to
                  responsible sourcing, recycling initiatives, and continuous
                  improvement in green practices to mitigate environmental
                  impact.
                </>
              ) : (
                <>
                  EcoSolution fosters community engagement by collaborating with
                  local stakeholders, providing education on renewable energy
                  benefits, and offering job opportunities. Our commitment to a
                  just transition involves prioritizing social equity,
                  supporting local economies, and ensuring that the shift to
                  renewable energy is inclusive and beneficial for all.
                </>
              )}
            </Answer>
          </QuestionWrapper>
        ))}
      </QuestionsWrapper>
      <FAQContactWrapper>
        <FAQText>Didn&apos;t find the answer to your question? </FAQText>
        <ContactButton>
          Contact Us
          <SVGArrow>
            <use href={`${sprite}#icon-arrow-down`} />
          </SVGArrow>
        </ContactButton>
      </FAQContactWrapper>
    </FAQWrapper>
  );
});

export default FrequentlyAskedQuestions;
