# Tasker 

Um simples sistema de gerenciamento de atividades utilizando o ERN de MERN

# :hammer: Tech utilizada

Linguagem principal: Typescript

- Server:
    - NodeJs
    - Express
    - Zod
    - TSX

- Client:
    - React.js
    - TailwindCss
    - React Query
    - Axios

- Outros:
    Figma: https://www.figma.com/file/Ky63qilJqeAhwlokmmXyNZ/Tasker?type=design&node-id=0%3A1&t=SmiewTKomphn9qQc-1


# :zap: Iniciando o projeto em modo desenvolvimento

Esse projeto pode ser iniciado pelo terminal utilizando os seguintes passos:

1. Clone este projeto: `git clone https://www.github.com/JP-Go/tasker.git`
1. Inicie um terminal na pasta do projeto (`cd tasker`) e vá para a pasta server: `cd server`
1. Inicie o servidor com o comando `npm run dev`
1. Abra outro terminal e vá para pasta client : `cd client`
1. Novamente execute o comando `npm run dev`
1. Abra seu navegador em `http://localhost:5173` e pronto.

Por padrão o cliente funcionará na porta padrão do Vite (5173 agora, 23 de maio de 2023) e o servidor na porta 
4000. Você pode altera essas portas utilizando as configurações do vite, no arquivo `vite.config.ts` como a seguir

```ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173 // Ou outra porta
  }
})

```

Para mudar a porta do servidor, basta definir a variável de ambiente PORT

```bash
export PORT=3333 # ou outra porta
```

# :bulb: Iniciando o projeto em modo produção

Esse projeto pode ser iniciado pelo terminal utilizando os seguintes passos:

1. Clone este projeto: `git clone https://www.github.com/JP-Go/tasker.git`
1. Inicie um terminal na pasta do projeto (`cd tasker`) e vá para a pasta server: `cd server`
1. Inicie o servidor com o comando `npm run start`
1. Abra outro terminal e vá para pasta client : `cd client`
1. Novamente execute o comando `npm run build`
1. Em seguida execute o comando `npm run start`
1. Abra seu navegador na url indicada pelo prompt e pronto.
