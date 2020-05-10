# Squadra - Marvel

> Sistema de listagem de heróis e visualização de séries dos heróis

## Instalação

Você deverá ter em sua máquina os seguinte itens:

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/) 10.0.0 (ou superior)

1. Faça um Fork ou clone este repositório.

2. Instale as dependências do projeto:

   ```sh
   npm install
   ```

   ou se você usa yarn:

   ```sh
   yarn
   ```

3. Crie e preencha o arquivo `.env` com base no arquivo `.env-example`.
   > Obs:. Deve-se utilizar a `privateKey` e a `apiKey` adquirida no site [Developer Marvel](https://developer.marvel.com/).

## Execução

Para início da aplicação, execute:

#### `Desenvolvimento:`

```sh
npm start
```

ou se você usa yarn:

```sh
yarn start
```

#### `Produção:`

```sh
npm run build
```

ou se você usa yarn:

```sh
yarn build
```

_Isso irá criar a pasta `build` com os arquivos para uso em produção._

## Testes:

_Os testes estão localizados na pasta `./src/__tests__`._

Use o comando abaixo para executar os testes:

```sh
npm test
```

ou se você usa yarn:

```sh
yarn test
```

## Páginas

### `Home:`

> Página responsável pela listagem dos heróis, também é possível procurar heróis pelo nome. Como a API só disponibiliza a pesquisa tendo que o nome começar com o valor pesquisado,é assim que a pesquisa irá funcionar.

#

### `Herói:`

> Página responsável por mostrar as séries de quadrinhos que o herói participou, também é possível ver sua foto e nome.

## Bibliotecas

### `Desenvolvimento:`

> `eslint` - Responsável por encontrar "problemas" no código.

> `prettier` - Responsável por ajustar trechos do código automaticamente.

> `eslint-config-prettier` - Desativa regras que podem entrar em conflito com o Prettier.

> `eslint-plugin-prettier` - Executa o Prettier como uma regra do eslint e relata as diferenças como problemas individuais do eslint.

> `babel-eslint` - Traz para o eslint a informação do uso das ultimas versões do babel.

> `react-app-rewired` - Utilizado para ter acesso a configurações do jest.

> `@testing-library/react` - Utilizado para testes de componentes react.

> `@testing-library/jest-dom` - Utilizado para mais acessos ao DOM durante os testes.

> `@types/jest` - Utilizado para autocomplete nos arquivos de teste.

> `axios-mock-adapter` - Utilizado para simular o chamado a api nos teste.

### `Produção:`

> `styled-components` - Utilizado para estilização do sistema.

> `react-router-dom` - Responsável pelo roteamento do sistema.

> `axios` - Utilizado para fazer requisições rest.

> `crypto-js`: utilizado para gerar a hash md5 para o consumo da api.

> `prop-types` - Checa a tipagem dos valores recebidos pelos componentes em suas props.
