## Informações

Nome do site: cupcakes-rafa 

Link do site: https://cupcakes-rafa.vercel.app/

Objetivo: Projeto de desenvolvimento de um site de cupcakes para faculdade

Linguagem: Next.js, React, Tailwind

Banco de dados: Postgres

Hospedagem: Vercel


## Como rodar o projeto?

Para executar o projeto basta abrir o seu terminal no diretorio do projeto e 
rodar os seguintes comandos
```bash
npm install
```
logo em seguida
```bash
npm run dev
# ou
yarn run dev
```

abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Conectando com banco
Caso queira que a parte de login funcione também você terá que ter ou criar um banco de dados no site da vercel.

Próximo passo, clique em seu banco e abra a guia .env.local e copie tudo que há dentro dele

![image](https://github.com/Rafael-Zancanaro/loja-cupcakes/assets/84671598/92e8a833-23ce-448a-9a99-6dd55182f154)

Em Seguida volte ao projeto e crie um arquivo no diretório princial chamado .env
e cole tudo dentro deste arquivo.

Após isso pule uma linha no arquivo e crie a key com esse nome
```bash
NEXTAUTH_SECRET=
```

Depois acesse o site: https://generate-secret.vercel.app/32 para obter esse token,

após isso volte ao arquivo .env e cole junto a key criada anteriormente dessa forma
```bash
NEXTAUTH_SECRET=token_obtido_do_site_aqui
```

