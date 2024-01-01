# Gestor de pacientes

Este projeto simula um gestor de dados de pacientes no sistema de uma clínica. Foi desenvolvido como teste técnico para um processo seletivo da empresa Gestão DS.


## Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

```bash
# Clone o repositório
git clone https://github.com/geicybeatriz/react-patient-management.git

# Acesse o diretório do projeto
cd react-patient-management

# Instale as dependências
npm install

```


## Uso

Configure o arquivo .env com as variáveis de ambiente
```bash

REACT_APP_BASE_API= "https://node-healthcare-api.onrender.com"

REACT_APP_VIACEP_API = "https://viacep.com.br/ws/"

```


Execute a aplicação localmente

```bash

npm start

```

Abra o navegador e acesse: http://localhost:3000.

## Funcionalidades

- Visualizar tabela com dados dos pacientes cadastrados.
- Adicionar novo paciente através de um modal com formulário.
- Editar dados do paciente através de um modal preenchido com os dados existentes.
- Excluir dados do paciente com confirmação via modal.
- Requisição de dados de endereço usando a API ViaCEP.


## Tecnologias 

- ReactJS
- Axios
- API ViaCEP
- StyledComponents

## Contribuição

Se quiser contribuir, siga os passos abaixo:

1. Fork o projeto
2. Crie uma branch (git checkout -b feature/sua-feature)
3. Commit suas mudanças (git commit -am 'Adicione sua feature')
4. Push para a branch (git push origin feature/sua-feature)
5. Abra um Pull Request