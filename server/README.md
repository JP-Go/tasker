# Tasker API

A API por trás do projeto Tasker

# Recursos

A API possui somente um único recurso: Task (Tarefa), representado pelo seguinte 
tipo em Typescript

```ts
type Task = {
    id: number,
    titulo: string,
    concluida: boolean
}
```

# Endpoints

Todos os endpoints da API possuem o prefixo `/tasks` portanto vamos o omitir da descrição dos endpoints.
Nenhum dos endpoints é protegido, portanto não há necessidade de alguma forma de autenticação

## POST /tasks/

Cria a task com id igual a `:id` e retorna o resultado da criação

### Corpo

O corpo deve possuir o seguinte formato:

```json

{
    "titulo": "Título da tarefa",
    "concluida": true // ou false
}

```

OBS: Se o campo `concluida` for omitido, a task será criada com este campo igual a 
`false`

### Retorno
 - 200: Sucesso -> Task

Exemplo de retorno:

```json
    {
        "id": 4,
        "titulo": "Estudar Leis de Newton",
        "concluida": false
    }

```

## GET /tasks/

Retorna uma lista de todas as tasks existentes

### Retorno
 - 200: Sucesso -> Task[]

Exemplo de retorno:

```json
 [
    {
        "id": 1,
        "titulo": "Aprender React",
        "concluida": true
    },
    {
        "id": 2,
        "titulo": "Estudar NodeJS",
        "concluida": false
    },
]

```

## GET /tasks/:id

Retorna a task com id igual a `:id`

### Retorno
 - 200: Sucesso -> Task

Exemplo de retorno:

```json
    {
        "id": 2,
        "titulo": "Estudar NodeJS",
        "concluida": false
    }

```

 - 400: Error -> Task não encontrada

Exemplo de retorno:

```json
{
    "error": "Task with id 4 was not found"
}

```

# DELETE /tasks/:id

Deleta a task com id igual a `:id`

### Retorno
 - 204: Sucesso -> void

Não retorna nenhum payload

 - 400: Error -> Task não encontrada

Exemplo de retorno:

```json
{
    "error": "Task with id 4 was not found"
}

```

## PATCH /tasks/:id

Atualiza a task com id igual a `:id` e retorna o resultado da atualização

### Corpo

O corpo deve possuir o seguinte formato:

```json

{
    "titulo": "Título da tarefa",
    "concluida": true // ou false
}

```

### Retorno
 - 200: Sucesso -> Task

Exemplo de retorno:

```json
    {
        "id": 2,
        "titulo": "Estudar NodeJS",
        "concluida": true
    }

```

 - 400: Error -> Task não encontrada

Exemplo de retorno:

```json
{
    "error": "Task with id 4 was not found"
}

```
