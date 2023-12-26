import styled from "styled-components";

function Label({type, color, text, fontSize}){
  return (
    <Container>
      <TextContent type={type} color={color} fontSize={fontSize}>{text}</TextContent>
    </Container>
  )
}

export default Label;

const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContent= styled.h1`
  width: 100%;
  text-align: center;
  font-size: ${props => props.fontSize || "14px"};
  font-weight: ${props => props.type === "primary" ? "600" : "400"};
  color: ${props => props.color || "#474747"};
  text-align: center;

  @media (min-width: 992px) {
    line-height: 21px;
  }
`;