import { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled from "styled-components";
import Menu from "./Menu";

function MenuIcon({id}) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [iconPosition, setIconPosition] = useState({top:0, left:0});

  function handleIconClick(event){
    const {top, left} = event.target.getBoundingClientRect();
    setIconPosition({top, left});
    setMenuOpen(!isMenuOpen);
  }

  return (
    <Container>
      <ContainerIcon onClick={handleIconClick}>
        <MdMoreHoriz size={24} color="#000"/>
      </ContainerIcon>
      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => setMenuOpen(false)} 
        iconPosition={iconPosition}
        id
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

