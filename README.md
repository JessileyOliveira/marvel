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
