# EFood

> Projeto feito tomando como base o projeto [EPlay](https://github.com/ogiansouza/eplay) do curso Desenvolvedor Full Stack Python da EBAC na aula Fazendo um e-commerce

<p align="center">
  <img alt="Logo do projeto" src="./src/assets/images/logo.svg" />
</p>

# About the Project/Sobre o projeto

Trata-se de um aplicativo de entrega de alimentos, onde os usuários podem fazer pedidos de restaurantes locais e receber a entrega em sua casa. O projeto é desenvolvido por João Portugal e tem como objetivo fornecer uma solução conveniente para pedidos de comida online.

## Funcionalidades

- Navegação entre páginas
- Adicionar itens ao carrinho de compras
- Processo de checkout 


## Tecnologias utilizadas

- Framework utilizado: React
- React Redux:
    - Centralizar o gerenciamento de estado
- React Router Dom: 
    - Gerenciar a navageção entre as rotas
- React Spinners: 
    - Inserir animação de carregamento durante a requisição assíncrona
- React Input Mask: 
    - Inserir máscara nos campos do formulário e garantir a inserção de dados correta pelo usuário
- Formik: 
    - Simplificar a lógica de validação dos formulário
- Yup: 
    - Gerenciar o estado dos inputs e trabalhar junto ao formik no processo de validação
- Styled Components: 
    - Criar componentes estilizados

## Requisitos para rodar o projeto

Node.js (versão 12 ou superior)

#### Setup do ambiente

- NPM

## Estrutura do projeto

- `./pages`: É pasta geral que reuni os arquivos utilizados para montar as rotas pelo React-Router-Dom
- `./router.tsx`: É o arquivo de configuração das rotas do react-router-dom
- `./src/components`: Estão todos os componentes do projeto
- `./src/utils`: Disponibiliza utilitários que exportados para serem utilizados em mais de uma parte da aplicação, por exemplo:
  - `parseToBrl(amount)`: Uma função para formatar os valores para a moeda brasileira
  - `getTotalPrice(items)`: Uma função para calcular o valor total no carrinho através do método Reduce
- `./src/services`: Configura as queries para a [API](https://fake-api-tau.vercel.app/api/efood/restaurantes) utilizando o Redux Toolkit Query

## Configuração
- Clone este repositório em sua máquina local usando o comando git clone https://github.com/joaosportugal/project_efood.git.
- Navegue até o diretório raiz do projeto: cd project_efood.
- Instale as dependências do projeto executando npm install ou yarn install.
- Inicie o servidor de desenvolvimento executando npm start ou yarn start.
- Abra o navegador e acesse http://localhost:3000 para visualizar o aplicativo.

## Contribuição
Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga as etapas abaixo:

- Faça um fork deste repositório.
- Crie uma nova branch com o nome descritivo da sua contribuição: git checkout -b minha-contribuicao.
- Faça as alterações necessárias e faça commit das suas alterações: git commit -m "Minha contribuição".
- Envie suas alterações para o repositório remoto: git push origin minha-contribuicao.
- Abra um pull request no repositório original.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

## Contato
Se você tiver alguma dúvida ou sugestão sobre o projeto, sinta-se à vontade para entrar em contato comigo por meio do email portugalestudio@gmail.com
