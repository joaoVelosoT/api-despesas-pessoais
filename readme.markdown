
# Projeto Despesas Pessoais

Este projeto consiste em um sistema simples de gerenciamento de despesas pessoais, permitindo que o usuário adicione e exclua transações.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/joaoVelosoT/Despesas-Pessoais.git
```

Entre no diretório do projeto

```bash
  cd despesas-pessoais
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

`HOST_DB`

`PASS_DB`

`URL_DB`

`SECRET`

# Documentação da API

## Endpoints

### Criar um novo usuário

`POST /user`

Cria um novo usuário no sistema.

#### Middleware:
- `UserValidate`: Middleware para validar os dados de entrada do usuário.

#### Corpo da Requisição:
| Campo      | Tipo     | Descrição                        |
|------------|----------|----------------------------------|
| `nome`     | `string` | **Obrigatório**. Nome do usuário |
| `email`    | `string` | **Obrigatório**. Email do usuário |
| `senha`    | `string` | **Obrigatório**. Senha do usuário |

---

### Retornar todos os usuários

`GET /user`

Retorna uma lista de todos os usuários cadastrados.

---

### Retornar um usuário

`GET /user/:id`

Retorna as informações de um usuário específico com base no seu ID.

#### Parâmetros de URL:
| Parâmetro | Tipo     | Descrição                                      |
|-----------|----------|------------------------------------------------|
| `id`      | `string` | **Obrigatório**. O ID do usuário a ser buscado |

---

### Atualizar um usuário

`PUT /user/:id`

Atualiza as informações de um usuário existente.

#### Parâmetros de URL:
| Parâmetro | Tipo     | Descrição                                      |
|-----------|----------|------------------------------------------------|
| `id`      | `string` | **Obrigatório**. O ID do usuário a ser atualizado |

#### Corpo da Requisição:
| Campo      | Tipo     | Descrição                                    |
|------------|----------|----------------------------------------------|
| `nome`     | `string` | **Opcional**. Nome do usuário atualizado     |
| `email`    | `string` | **Opcional**. Email do usuário atualizado    |
| `senha`    | `string` | **Opcional**. Senha do usuário atualizado    |

---

### Deletar um usuário

`DELETE /user/:id`

Exclui um usuário do sistema.

#### Parâmetros de URL:
| Parâmetro | Tipo     | Descrição                                      |
|-----------|----------|------------------------------------------------|
| `id`      | `string` | **Obrigatório**. O ID do usuário a ser deletado |

---

### Login de um usuário

`POST /user/login`

Realiza o login de um usuário no sistema.

#### Corpo da Requisição:
| Campo      | Tipo     | Descrição                        |
|------------|----------|----------------------------------|
| `email`    | `string` | **Obrigatório**. Email do usuário |
| `senha`    | `string` | **Obrigatório**. Senha do usuário |

# Documentação da API de Transações

## Endpoints

### Criar uma nova transação

`POST /transacao`

Cria uma nova transação no sistema.

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.
- `TransacaoValidate`: Valida os dados da transação.

#### Corpo da Requisição:
| Campo         | Tipo     | Descrição                             |
|---------------|----------|---------------------------------------|
| `valor`       | `number` | **Obrigatório**. Valor da transação   |
| `tipo`        | `string` | **Obrigatório**. Tipo da transação (entrada/saída) |
| `descricao`   | `string` | **Opcional**. Descrição da transação  |

---

### Retornar todas as transações

`GET /transacao`

Retorna todas as transações cadastradas.

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.

---

### Retornar uma transação específica

`GET /transacao/:id`

Retorna as informações de uma transação específica com base no seu ID.

#### Parâmetros de URL:
| Parâmetro | Tipo     | Descrição                                     |
|-----------|----------|-----------------------------------------------|
| `id`      | `string` | **Obrigatório**. O ID da transação a ser buscada |

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.

---

### Atualizar uma transação

`PUT /transacao/:id`

Atualiza uma transação existente.

#### Parâmetros de URL:
| Parâmetro | Tipo     | Descrição                                     |
|-----------|----------|-----------------------------------------------|
| `id`      | `string` | **Obrigatório**. O ID da transação a ser atualizada |

#### Corpo da Requisição:
| Campo         | Tipo     | Descrição                               |
|---------------|----------|-----------------------------------------|
| `valor`       | `number` | **Opcional**. Novo valor da transação   |
| `tipo`        | `string` | **Opcional**. Tipo da transação (entrada/saída) |
| `descricao`   | `string` | **Opcional**. Nova descrição da transação |

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.

---

### Deletar uma transação

`DELETE /transacao/:id`

Exclui uma transação do sistema.

#### Parâmetros de URL:
| Parâmetro | Tipo     | Descrição                                     |
|-----------|----------|-----------------------------------------------|
| `id`      | `string` | **Obrigatório**. O ID da transação a ser deletada |

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.

---

### Retornar o total de transações

`GET /transacao/total`

Retorna o saldo total de todas as transações (entradas e saídas).

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.

---

### Retornar o total de entradas

`GET /transacao/entradas`

Retorna o total de todas as entradas registradas.

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.

---

### Retornar o total de saídas

`GET /transacao/saidas`

Retorna o total de todas as saídas registradas.

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.

---

### Retornar todas as transações

`GET /transacao/todastransferencias`

Retorna a lista completa de todas as transações.

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.

---

### Retornar todas as entradas

`GET /transacao/todasentradas`

Retorna a lista completa de todas as transações de entrada.

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.

---

### Retornar todas as saídas

`GET /transacao/todassaidas`

Retorna a lista completa de todas as transações de saída.

#### Middleware:
- `TokenAuthenticate`: Verifica se o usuário está autenticado.


