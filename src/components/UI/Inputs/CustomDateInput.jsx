import { MdOutlineCalendarMonth } from "react-icons/md";
import styled from "styled-components";

function CustomDateInput({name, value, content, onChange}){
  return (
    <StyledContainer>
      <MdOutlineCalendarMonth size={24} color="#136cdc"/>
      <StyledDateInput 
        type="text"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={content}
        pattern="\d{4}-\d{2}-\d{2}"
      />
    </StyledContainer>
  )
}

export default CustomDateInput;

const StyledContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  padding: 10px 15px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #E8E8E8;
  background-color: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(14, 30, 47, 0.02);
`;

const StyledDateInput= styled.input`
  border: none;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;

  ::placeholder{
    color: #C0C0C0;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
`;