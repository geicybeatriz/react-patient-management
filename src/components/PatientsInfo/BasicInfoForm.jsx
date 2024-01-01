import { useContext } from "react";
import styled from "styled-components";
import userPicture from "../../assets/images/user-picture.png";
import { PatientContext } from "../../contexts/PatientContext";
import Label from "../Label/Label";
import CustomDateInput from "../UI/Inputs/CustomDateInput";
import CustomInput from "../UI/Inputs/CustomInput";
import CustomSelect from "../UI/Select/CustomSelect";

function BasicInfoForm(){
  const {patientData, setPatientData} = useContext(PatientContext);

  const handlePatientInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container>
      <ContainerPicture>
        <Picture>
          <Image src={userPicture} alt="foto do paciente"/>
        </Picture>
      </ContainerPicture>
      <FormContainer>
        <FormItem>
          <Label color="#656565" text="Paciente"/>
          <CustomInput type="text" id='nome' name='nome' value={patientData.nome} content="Digite" onChange={handlePatientInputChange} />
        </FormItem>
        <FormItem>
          <Label color="#656565" text="Apelido"/>
          <CustomInput type="text" id='apelido' name='apelido' value={patientData.apelido} content="Digite" onChange={handlePatientInputChange} />
        </FormItem>
        <FormItem>
          <Label color="#656565" text="Nacionalidade"/>
          <CustomInput type="text" id='nacionalidade' name='nacionalidade' value={patientData.nacionalidade} content="Digite" onChange={handlePatientInputChange} />
        </FormItem>
        <FormItem>
          <Label color="#656565" text="Nascimento"/>
          <CustomDateInput name='dataNascimento' value={patientData.dataNascimento} content="01/02/22" onChange={handlePatientInputChange} />
        </FormItem>
        <FormItem>
          <Label color="#656565" text="CPF"/>
          <CustomInput type="text" id='cpf' name='cpf' value={patientData.cpf} content="Digite" onChange={handlePatientInputChange} />
        </FormItem>
        <FormItem>
          <Label color="#656565" text="RG"/>
          <CustomInput type="text" id='rg' name='rg' value={patientData.rg} content="Digite" onChange={handlePatientInputChange} />
        </FormItem>
        <FormItem>
          <Label color="#656565" text="Gênero"/>
          <CustomSelect id="genero" name="genero" value={patientData.genero} onChange={handlePatientInputChange}/>
        </FormItem>
        <FormItem>
          <Label color="#656565" text="Estado civil"/>
          <CustomSelect id='estadoCivil' name="estadoCivil" value={patientData.estadoCivil} onChange={handlePatientInputChange}/>
        </FormItem>
        <FormItem />
      </FormContainer>
      <FormContainer>
        <FormItem name="observacoes">
          <Label text="Observações adicionais" color="#656565"/>
          <CustomInput type="text" id='observacoes' name='observacoes' value={patientData.observacoes} content="Digite" onChange={handlePatientInputChange} />
        </FormItem>
      </FormContainer>
    </Container>
  )
}

export default BasicInfoForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-bottom: 75px;
  overflow-y: auto;
`;

const ContainerPicture = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 25px 0;
`;

const Picture = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 5px;
`;

const FormItem = styled.div`
  width: ${props => (props.name === "observacoes") ? "100%" : "229px"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

