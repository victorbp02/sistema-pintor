# Backend - Sistema de Pintor

Backend completo para o sistema de pintor desenvolvido com Node.js, Express, TypeScript e Prisma.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Linguagem tipada
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados (desenvolvimento)
- **PostgreSQL** - Banco de dados (produção)
- **JWT** - Autenticação
- **bcryptjs** - Criptografia de senhas
- **express-validator** - Validação de dados
- **CORS** - Cross-Origin Resource Sharing

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**
   ```bash
   cp .env.example .env
   ```
   
   Edite o arquivo `.env` com suas configurações:
   ```env
   PORT=3001
   NODE_ENV=development
   DATABASE_URL="file:./dev.db"
   JWT_SECRET=sua_chave_secreta_muito_segura_aqui
   JWT_EXPIRES_IN=7d
   CORS_ORIGIN=http://localhost:5173
   ```

3. **Configurar banco de dados:**
   ```bash
   # Gerar cliente Prisma
   npm run db:generate
   
   # Executar migrações
   npm run db:migrate
   
   # Popular banco com dados de exemplo
   npm run db:seed
   ```

## 🚀 Executando o projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

## 📊 Endpoints da API

### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Fazer login
- `GET /api/auth/profile` - Obter perfil do usuário (protegido)

### Clientes
- `GET /api/clientes` - Listar todos os clientes (protegido)
- `POST /api/clientes` - Criar novo cliente (protegido)
- `GET /api/clientes/:id` - Obter cliente específico (protegido)
- `PUT /api/clientes/:id` - Atualizar cliente (protegido)
- `DELETE /api/clientes/:id` - Deletar cliente (protegido)

### Serviços
- `GET /api/servicos` - Listar todos os serviços (protegido)
- `POST /api/servicos` - Criar novo serviço (protegido)
- `GET /api/servicos/:id` - Obter serviço específico (protegido)
- `PUT /api/servicos/:id` - Atualizar serviço (protegido)
- `DELETE /api/servicos/:id` - Deletar serviço (protegido)
- `GET /api/servicos/cliente/:clienteId` - Serviços de um cliente (protegido)
- `GET /api/servicos/status/:status` - Serviços por status (protegido)

### Health Check
- `GET /api/health` - Verificar status da API

## 🔐 Autenticação

O sistema usa JWT (JSON Web Tokens) para autenticação. Para acessar rotas protegidas, inclua o token no header:

```
Authorization: Bearer <seu_token_jwt>
```

### Usuário padrão criado pelo seed:
- **Email:** admin@sistema.com
- **Senha:** admin123
- **Role:** ADMIN

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── jwt.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── clienteController.ts
│   │   └── servicoController.ts
│   ├── middlewares/
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   └── validation.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── clienteRoutes.ts
│   │   ├── servicosRoutes.ts
│   │   └── index.ts
│   ├── services/
│   │   ├── authService.ts
│   │   ├── clienteService.ts
│   │   └── servicoService.ts
│   ├── types/
│   │   └── index.ts
│   ├── prisma/
│   │   └── seed.ts
│   └── server.ts
├── prisma/
│   └── schema.prisma
├── package.json
├── tsconfig.json
└── README.md
```

## 🗄️ Banco de Dados

### Entidades

#### Usuario
- `id` - Identificador único
- `nome` - Nome do usuário
- `email` - Email único
- `senha` - Senha criptografada
- `role` - Papel (ADMIN/USER)
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

#### Cliente
- `id` - Identificador único
- `nome` - Nome do cliente
- `telefone` - Telefone
- `email` - Email
- `endereco` - Endereço
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

#### Servico
- `id` - Identificador único
- `titulo` - Título do serviço
- `descricao` - Descrição do serviço
- `status` - Status (PENDENTE/EM_ANDAMENTO/CONCLUIDO/CANCELADO)
- `valor` - Valor do serviço
- `clienteId` - Referência ao cliente
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

## 🔧 Scripts Disponíveis

- `npm run dev` - Executar em modo desenvolvimento
- `npm run build` - Compilar TypeScript
- `npm start` - Executar em produção
- `npm run db:generate` - Gerar cliente Prisma
- `npm run db:migrate` - Executar migrações
- `npm run db:studio` - Abrir Prisma Studio
- `npm run db:seed` - Popular banco com dados de exemplo

## 🌐 Configuração para Produção

Para produção, configure as seguintes variáveis de ambiente:

```env
NODE_ENV=production
DATABASE_URL="postgresql://user:password@localhost:5432/database"
JWT_SECRET=chave_super_secreta_e_complexa
CORS_ORIGIN=https://seudominio.com
```

## 📝 Exemplos de Uso

### Registrar usuário
```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@email.com",
    "senha": "123456"
  }'
```

### Fazer login
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@sistema.com",
    "senha": "admin123"
  }'
```

### Criar cliente (com autenticação)
```bash
curl -X POST http://localhost:3001/api/clientes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <seu_token>" \
  -d '{
    "nome": "Maria Santos",
    "telefone": "(11) 99999-9999",
    "email": "maria@email.com",
    "endereco": "Rua das Flores, 123"
  }'
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 