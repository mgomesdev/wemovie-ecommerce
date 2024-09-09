## Framework

-   React.js **18.3.1**
-   Next.js **14.2.8**

## Deploy e Hospedagem

-   Vercel

## Tecnologias

-   HTML5
-   CSS3
-   Typescript
-   Tailwind
-   ContextAPI
-   FetchApi
-   Figma
-   Git/github
-   Jira
-   Notion
-   Clean Code, Clean Architecture, DDD
-   Agil
-   Mobile First

## Estrutura de Arquivos e Pastas

Utilizei Clean Architecture para organizar os arquivos e pastas, separando as responsabilidades, e organizando de uma forma totalmente escalavel e fácil de prestar manutenção pelos membros da equipe. Abaixo um resumo dos arquivos e pastas do projeto.

> **Obs:** no momento em que estiver lendo esta documentação, as pastas e a quantidade de arquivos podem ter crescido ou sido movidos conforme o projeto andou, porém a organização é a mesma.

-   **docs**: Documentações do projeto (este que você está lendo).
-   **public**: Pasta de assets e imagens do projeto (não precisei usar).
-   **src/app**
    -   **cart**: Arquivos responsaveis pela rota do carrinho.
    -   **purchase-completed**: Arquivos responsaveis pela rota da compra realizada.
    -   **lib**: Helpers do sistema.
    -   **layout.tsx**: Arquivo de layout global que envolve todo o sistema (header, meio).
    -   **global-error.tsx**: Página de erro global da aplicação em modo prod.
    -   **error.tsx**: Pagina de erro em modo dev.
    -   **not-found.tsx**: Pagina de 404.
    -   **components**: Todos os componentes do sistema, está organizado por pastas representando o **Atomic design**.
-   **schemas**: Assinaturas da estrutura de dados retornados pelos endpoints de api, e também as interface e types de cada Entidade.
-   **services**: Serviços de rede, utilizada pelo frontend para realizar solicitações http para api.
-   **.env.example**: Arquivo de exemplo para configuração dos .env.\* do sistema.
-   **eslint.config.js**: Configurações do eslint.
-   **.prettierrc**: Configurações do formatador prettier.
-   **tsconfig**: Configurações do typescript.

> Caso tenha esquecido de algo ou tenha alguma duvida, estou sempre a disposição : )

## CartContext

![CartContext](../images/cart-context.png 'CartContext')
