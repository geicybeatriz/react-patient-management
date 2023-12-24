import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";

function SearchBar (){
  return (
    <SearchContainer>
      <SearchIcon>
        <IoMdSearch size={24} color="#136CDC"/>
      </SearchIcon>
      <SearchInput type="text" placeholder="Pesquisar..."/>
    </SearchContainer>
  )
}

export default SearchBar;

const SearchContainer = styled.div`
  width: 80%;
  height: 40px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(14, 30, 47, 0.02);

  @media (min-width: 992px){
    width: 250px;
  }
`;

const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 24px;
  border: none;

  ::placeholder{
    font-size: 14px;
    font-weight: 400;
    color: #656565;
  }

  @media (min-width: 992px){
    width: 100%;
  }
`;
