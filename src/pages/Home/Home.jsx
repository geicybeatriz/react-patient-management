import styled from "styled-components";
import Logo from "../../components/Logo/Logo";

function Home(){
  return (
    <Container>
      <Logo/>
    </Container>
  )
}

export default Home;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
