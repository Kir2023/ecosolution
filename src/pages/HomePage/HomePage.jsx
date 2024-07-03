import { useRef } from "react";
import { Container } from "../../globalStyles";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import Electricity from "../../components/Electricity/Electricity";
import Cases from "../../components/Cases/Cases";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const mainSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const casesSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const contactUsSectionRef = useRef(null);

  return (
    <Container>
      <Header
        mainSectionRef={mainSectionRef}
        aboutSectionRef={aboutSectionRef}
        casesSectionRef={casesSectionRef}
        faqSectionRef={faqSectionRef}
        contactUsSectionRef={contactUsSectionRef}
      />
      <Main ref={mainSectionRef} casesSectionRef={casesSectionRef} />
      <About ref={aboutSectionRef} />
      <Electricity />
      <Cases ref={casesSectionRef} />
      <FrequentlyAskedQuestions
        ref={faqSectionRef}
        contactUsSectionRef={contactUsSectionRef}
      />
      <ContactUs ref={contactUsSectionRef} />
      <Footer mainSectionRef={mainSectionRef} />
    </Container>
  );
};

export default HomePage;
