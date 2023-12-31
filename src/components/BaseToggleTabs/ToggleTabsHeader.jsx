import styled from "styled-components";

function ToggleTabsHeader({selected, setSelected}){

  function handleTabClick(name){
    setSelected(prevSelected => (prevSelected === name ? prevSelected : name));
  }

  return (
    <Container>
      <BoxTitle
        name="tabInfo"
        isSelected={selected} 
        onClick={() => handleTabClick("tabInfo")}
      >
        Informações básicas
      </BoxTitle>
      <BoxTitle
        name="tabContact"
        isSelected={selected} 
        onClick={() => handleTabClick("tabContact")}
      >
        Contato
      </BoxTitle>
    </Container>
  );
}

export default ToggleTabsHeader;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  
  border-bottom: 2px solid #EBEEF1;
`;

const BoxTitle = styled.div`
  width: auto;
  height: auto;
  padding-bottom: 18px;
  display: flex;
  align-items: flex-start;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; 
  color: ${props => (props.isSelected === props.name) ? '#4F1368' : '#656565'};
  border-bottom: ${props => (props.isSelected === props.name) ? '2px solid #4F1368' : 'none'};

  cursor: pointer;
`;