import styled from "styled-components";
import ToggleTabsHeader from "../BaseToggleTabs/ToggleTabsHeader";

function ModalHeader({selected, setSelected}){
  return (
    <Container>
      <ToggleTabsHeader selected={selected} setSelected={setSelected}/>
    </Container>
  );
}

export default ModalHeader;

const Container = styled.div`
  width: 100%;
`;