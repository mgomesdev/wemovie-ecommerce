## Validar se o código do componente Breadcrumb cumpre com o que está no documento do Figma.

Em minhas analises o componente não estava cumprindo com alguns requisitos, e foram realizados os seguintes ajustes:

-  Adicionado `>` entre cada link.
-  Quando o usuário navegar para uma etapa, todos os textos anteriores ao item ativo, ficam com um underline.

### Comentarios

-  Adicionei uma variavel `activePathIndex`, que busca na lista através do metodo `Array.findIndex` o index correspondente a rota atual, para fins de ter uma referencia de busca das opções anteriores a que está ativa.
   -  `const activePathIndex = routes.findIndex((route) => route.path === currentPath);`
-  Fiz uma verificação para saber se o index atual é menor que o index do item ativo, e se corresponder, adicionar o className `underline` nas etapas anteriores.
   -  `index < activePathIndex && 'underline'`
-  Por fim, efetuei a substituição o `-` pelo `>` e adicionei um `mx-4` para dar um espaçamento entre as setas.
   -  `{index + 1 !== routes.length && <span className="mx-4">{'>'}</span>}`

### Codigo Ajustado

````typescript
interface BreadcrumbRoute {
    path: string;
    name: string;
}

interface BreadcrumbProps {
    routes: Array<BreadcrumbRoute>;
    currentPath?: string;
}

function Breadcrumb({ routes, currentPath }: BreadcrumbProps) {
const selectedStyle = 'font-bold';

    return (
        <div className="flex gap-2">
            {routes.map(({ name, path }, index) => {
                const activePathIndex = routes.findIndex((route) => route.path === currentPath);

                return (
                    <div key={index} className="flex gap-2">
                        <span
                            className={`${currentPath === path && selectedStyle} ${index < activePathIndex && 'underline'}`}
                        >
                            {name}
                        </span>

                        {index + 1 !== routes.length && <span className="mx-4">{'>'}</span>}
                    </div>
                );
            })}
        </div>
    );

}```
````

### Codigos utilizados nos testes

Para simular a ativação, modifique a prop `currentPath` do component Breadcrumb para ativar a rota correspondente no array.

```typescript
const routes = [
   { path: "/", name: "home" },
   { path: "/carrinho", name: "carrinho" },
   { path: "/purchase-completed", name: "purchase" },
   { path: "/error", name: "error" },
];

<Breadcrumb routes={routes} currentPath="/carrinho" />;
```
