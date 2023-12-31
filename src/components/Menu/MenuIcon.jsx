import { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled from "styled-components";
import Menu from "./Menu";

function MenuIcon({id}) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <ContainerIcon onClick={() => setMenuOpen(!isMenuOpen)}>
        <MdMoreHoriz size={24} color="#000"/>
      </ContainerIcon>
      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => setMenuOpen(false)} 
        id={id}
      />
    </Container>
  );
}

export default MenuIcon;

const ContainerIcon = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

