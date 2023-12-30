import { IoMdAdd } from "react-icons/io";
import styled from "styled-components";
import Label from "../../Label/Label";

function Button ({typeButton, text, backgroundColor, borderColor, color}){
  return (
    <StyledButton type={typeButton} backgroundColor={backgroundColor} borderColor={borderColor}>
      {(typeButton === "add-patients") ? (<IoMdAdd size={20} color="#fff" />) : <></>}
      <Label text={text} color={color} type='primary' />
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.div`
  width: ${props => props.type ? "157px" : "205.364px"};
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;

  cursor: pointer;

  border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  border-radius: 4px;
  background-color: ${props => props.backgroundColor};
  box-shadow: 0px 4px 8px 0px rgba(14, 30, 47, 0.03);
  transition: 0.3s;

  &:hover {
    background-color: #2076c8;
  }

`;

