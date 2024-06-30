import { useRef } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Container } from "../../globalStyles";
import About from "../../components/About/About";

const HomePage = () => {
  const mainSectionRef = useRef(null);

  return (
    <>
      <Header mainSectionRef={mainSectionRef} />
      <Container>
        <Main ref={mainSectionRef} />
        <About />
      </Container>
    </>
  );
};

export default HomePage;
