import { useRef } from "react";
import { Container } from "../../globalStyles";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import Electricity from "../../components/Electricity/Electricity";
import Cases from "../../components/Cases/Cases";

const HomePage = () => {
  const mainSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const casesSectionRef = useRef(null);

  return (
    <Container>
      <Header
        mainSectionRef={mainSectionRef}
        aboutSectionRef={aboutSectionRef}
        casesSectionRef={casesSectionRef}
      />
      <Main ref={mainSectionRef} />
      <About ref={aboutSectionRef} />
      <Electricity />
      <Cases ref={casesSectionRef} />
    </Container>
  );
};

export default HomePage;
