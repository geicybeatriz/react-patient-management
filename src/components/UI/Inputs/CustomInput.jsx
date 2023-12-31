import styled from "styled-components";

function CustomInput({type, id, name, value, content, onChange}){
  return (
    <StyledContainer name={name}>
      <StyledInput 
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={content}
        onChange={onChange}
      />
    </StyledContainer>
  )
}

export default CustomInput;

const StyledContainer = styled.div`
  width: ${props => (props.name === "observacoes") ? "100%" : "229px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: ${props => (props.name === "observacoes") ? "73px" : "32px"};
  padding: 10px 15px;

  display: flex;
  align-items: flex-start;
  gap: 10px;

  border-radius: 5px;
  border: 1px solid #E8E8E8;
  background: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(14, 30, 47, 0.02);
  
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;

  ::placeholder{
    color: #C0C0C0;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
`;