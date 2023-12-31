import styled from "styled-components";

function CustomSelect ({id, name, value, onChange}){
  
  return (
    <StyledContainer>
      {name === "genero" ? (
        <>
          <StyledSelect id={id}  defaultValue="Sem filtro" name={name} value={value}  onChange={onChange}>
            <StyledOptions value="Sem filtro">Sem filtro</StyledOptions>
            <StyledOptions value="Male">Masculino</StyledOptions>
            <StyledOptions value="Female">Feminino</StyledOptions>
            <StyledOptions value="NonBinary">Não-Binário</StyledOptions>
            <StyledOptions value="Other">Outro</StyledOptions>
            <StyledOptions value="PreferNotToSay">Prefiro não dizer</StyledOptions>
          </StyledSelect>
        </>
      ) : (
        <>
        <StyledSelect id={id}  defaultValue="Sem filtro" name={name} value={value}  onChange={onChange}>
          <StyledOptions value="Sem filtro">Sem filtro</StyledOptions>
          <StyledOptions value="Single"> Solteiro/a </StyledOptions>
          <StyledOptions value="Married"> Casado/a </StyledOptions>
          <StyledOptions value="Divorced"> Divorciado/a </StyledOptions>
          <StyledOptions value="Widowed"> Viúvo/a </StyledOptions>
          <StyledOptions value="Other">Outro</StyledOptions>
          <StyledOptions value="PreferNotToSay">Prefiro não dizer</StyledOptions>
          </StyledSelect>
        </>
      )}
    </StyledContainer>
  )
}

export default CustomSelect;

const StyledContainer = styled.div`
  display: flex;
  width: 229px;
  align-items: flex-start;
  justify-content: center;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 32px;
  padding: 8px 15px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 5px;
  border: 1px solid #E8E8E8;
  box-shadow: 0px 1px 3px 0px rgba(14, 30, 47, 0.02);
  background-color: #fff;

  color: ${props => (props.defaultValue === props.value) ? "#c0c0c0" : "#000"};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;


`;

const StyledOptions = styled.option`
  height: 32px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  color: #C0C0C0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;