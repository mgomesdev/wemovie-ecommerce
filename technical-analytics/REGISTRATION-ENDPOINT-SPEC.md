# Documentação do Endpoint de Cadastro

> Especificação do endpoint de cadastro de vendedores e compradores `Pessoa Física` e `Pessoa Jurídica`.

-  Esta tela é composta por dois atores principais, são eles: `Pessoa` e `Endereço`.

## Campos

### Pessoa

-  **personType: string**: `required` - tipo de pessoa que pode ser `"PF"` ou `"PJ"`.
-  **cpf: string**: `required` - Número do CPF.
-  **cnpj: string**: `optional` para `Pessoa Física` e obrigatório para `Pessoa Jurídica`.
-  **name: string**: `required` - Nome.
-  **cellPhone: string**: `required` - Número do Celular.
-  **phone: string**: `required` - Número do Telefone.
-  **email: string**: `required` - E-mail utilizado.

### Endereco

-  **zipCode: number**: `required` - Cep.
-  **publicPlace: string**: `required` - Logradouro.
-  **number: number**: `required` - Número.
-  **complement: string**: `required` - Complemento.
-  **city: string**: `required` - Cidade.
-  **neighborhood: string**: `required` - Bairro.
-  **state: string**: `required` - Estado.

## Métodos

### Pessoa

Segue os métodos necessários para a Entidade Pessoa.

#### Buscar informações do usuário pela query

-  `GET: /api/user?search=...`: Buscar informações especificas de um usuário pela query, utilizado por exemplo, para verificar se já existe um usuário com um determinado e-mail cadastrado.

#### Parametros de URL

-  `search`: (optional) - query para filtrar o usuario pelas informações especificas.
   -  `?search=email` - retorna os usuários que correspondem ao e-mail informado.

---

#### Cadastrar um novo usuário

-  `POST: /api/user`: Cadastrar um novo usuário.

##### Body

```json
{
   "personType": "PJ",
   "cpf": "333.444.555.77",
   "cnpj": "41.456.003/0001-11",
   "name": "Matheus Gomes",
   "cellPhone": "(13) 99693-7036",
   "phone": "(13) 99693-7036",
   "email": "matheusgomes1203@hotmail.com",
   "address": {
      "zipCode": "11702-005",
      "publicPlace": "Avenida da Praia",
      "number": "403",
      "complement": "Avenida da Praia",
      "city": "Praia Grande",
      "neighborhood": "Guilhermina",
      "state": "São Paulo"
   }
}
```

> **Obs**: neste cenário, estou levando em consideração que o `frontend` irá consumir uma api externa de busca de endereços como por exemplo a [viacep](https://viacep.com.br/), que irá buscar as informações do endereço do usuário pelo cep informado, e enviar no `body` do endpoint de cadastro. O backend receberá os dados, e fará todos os relacionamentos das tabelas e tratativas dos dados de endereço.

## Respostas

### Pessoa

#### Sucesso (200 OK)

Retorna um objeto JSON com os detalhes do usuário.

Exemplo de resposta:

```json
{
   "personType": "PJ",
   "cpf": "333.444.555.77",
   "cnpj": "41.456.003/0001-11",
   "name": "Matheus Gomes",
   "cellPhone": "(13) 99693-7036",
   "phone": "(13) 99693-7036",
   "email": "matheusgomes1203@hotmail.com",
   "address": {
      "zipCode": "11702-005",
      "publicPlace": "Avenida da Praia",
      "number": "403",
      "complement": "Avenida da Praia",
      "city": "Praia Grande",
      "neighborhood": "Guilhermina",
      "state": "São Paulo"
   }
}
```

---

## Erros Possíveis

### Pessoa

#### 500 Internal Server Error

```json
{
   "mensagem": "*Nome do usuário*. Tente novamente mais tarde.",
   "statusCode": 500
}
```

---

#### 404 Not Found

```json
{
   "mensagem": "Usuário não encontrado.",
   "statusCode": 404
}
```

---

#### 400 Bad Request

```json
{
   "mensagem": "O servidor não conseguiu processar a requisição.",
   "statusCode": 400
}
```

---

#### 200 Success - Cadastrado com Sucesso

```json
{
   "mensagem": "Cadastrado com sucesso! Número protocolo, *número-protocolo*.",
   "statusCode": 200
}
```

#### 200 Success - Usuário já cadastrado

```json
{
   "mensagem": "Usuário já cadastrado.",
   "statusCode": 200
}
```
