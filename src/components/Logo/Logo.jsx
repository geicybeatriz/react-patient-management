import styled from "styled-components";
import logo from "../../assets/images/ds vertical secundaria 1.png";

function Logo(){
  return (
    <Container>
      <Picture src={logo} alt="logo Gestão DS"/>
    </Container>
  )
}

export default Logo;

const Container = styled.div`
  width: 115px;
  height: 92.1px;

  display: flex;
  justify-content:center;
  align-items: center;
  background-color: #fff;

  @media (min-width: 992px){
    width: 230px;
    height: 184.17px;
  }
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;