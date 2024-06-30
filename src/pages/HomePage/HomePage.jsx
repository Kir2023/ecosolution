import { useRef } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Container } from "../../globalStyles";

const HomePage = () => {
  const mainSectionRef = useRef(null);

  return (
    <Container>
      <Header mainSectionRef={mainSectionRef} />
      <Main ref={mainSectionRef} />
    </Container>
  );
};

export default HomePage;
