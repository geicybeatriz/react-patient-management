import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import PatientsList from "../../components/PatientsList/PatientsList";

function Home(){
  return (
    <Container>
      <Logo/>
      <PatientsList />
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
  background-color: #f6f6f6;
`;
