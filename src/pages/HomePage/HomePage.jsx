import { useRef } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import { Container } from "../../globalStyles";
import Electricity from "../../components/Electricity/Electricity";

const HomePage = () => {
  const mainSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  return (
    <Container>
      <Header
        mainSectionRef={mainSectionRef}
        aboutSectionRef={aboutSectionRef}
      />
      <Main ref={mainSectionRef} />
      <About ref={aboutSectionRef} />
      <Electricity />
    </Container>
  );
};

export default HomePage;
