import { RiArrowUpDownFill } from "react-icons/ri";
import styled from "styled-components";
import Label from "../Label/Label";
import MenuIcon from "../Menu/MenuIcon";

function PatientsTable({ patients, setPatients }){
  const columns = ["Nome", "CPF", "Data de nascimento", "E-mail", "Cidade", "Ações"];

  return (
    <TableContainer>
      <Table>
        <HeaderTable>
          <TableRow>
            {columns.map((column) => {
              return (
                <Th key={column}>
                  <Content>
                    <Label text={column} type="primary" color="#4b4b4b" fontSize="14px"/>
                    <Icon>
                      <RiArrowUpDownFill color="#136CDC" size={18}/>
                    </Icon>
                  </Content>
                </Th>
              )
            })}
          </TableRow>
        </HeaderTable>
        <tbody>
          {patients?.map((patient, index) => (
            <TableRow key={patient.id} isOdd={index % 2 === 0}>
              <Td>
                <Content>
                  <Label color="#136cdc" text={patient.nome} />
                </Content>
              </Td>
              <Td>
                <Content>
                  <Label color="#474747" text={patient.cpf} />
                </Content>
              </Td>
              <Td>
                <Content>
                  <Label color="#474747" text={patient.dataNascimento} />
                </Content>
              </Td>
              <Td>
                <Content>
                  <Label color="#474747" text={patient.email} />
                </Content>
              </Td>
              <Td>
                <Content>
                  <Label color="#474747" text={patient.address.cidade} />
                </Content>
              </Td>
              <Td>
                <Content>
                  <MenuIcon id={patient.id}/>
                </Content>
              </Td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default PatientsTable;

const TableContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 16.867px;
  border-radius: 0px 0px 5px 5px;
  background-color: #fff; 
`;

const Table = styled.table`
  width: 100%;
`;

const HeaderTable = styled.thead`
  width: 100%;
  height: 56px;
  padding: 8px 0px 8px 16px;
  border-bottom: 0.5px solid #E8E8E8;
  background-color: #FCFCFC;
  gap: 16px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 8px;
`;

const TableRow = styled.tr`
  width: 100%;
  height: 56px;
  padding: 8px 0px 8px 16px;
  border-bottom: 0.5px solid #E8E8E8;
  gap: 16px;
  background-color: ${props => props.isOdd ? "#fcfcfc" : "#fff"};
`;

const Th = styled.th`
  width: 148px;
  height: 40px;
  padding: 8px;
  vertical-align: middle;
  background-color: #fcfcfc;
`;

const Td = styled.td`
  width: 148px;
  height: 40px;
  padding: 8px;
  vertical-align: middle;
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
