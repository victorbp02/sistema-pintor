# Sistema Pintor - Frontend

Este é o frontend do Sistema Pintor, desenvolvido em React com TypeScript e Vite.

## 🚀 Deploy no Vercel

### Pré-requisitos
- Conta no [Vercel](https://vercel.com)
- Node.js 18+ instalado
- Git configurado

### Passos para Deploy

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Testar build localmente:**
   ```bash
   npm run build
   ```

3. **Deploy no Vercel:**

   **Opção 1 - Via CLI:**
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Fazer login
   vercel login
   
   # Deploy
   vercel
   ```

   **Opção 2 - Via GitHub:**
   - Conecte seu repositório GitHub ao Vercel
   - Configure as seguintes variáveis de ambiente se necessário:
     - `NODE_ENV=production`

4. **Configurações do Projeto:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Estrutura do Projeto

```
src/
├── components/     # Componentes React
├── pages/         # Páginas da aplicação
├── styles/        # Arquivos CSS/SCSS
├── assets/        # Imagens e recursos estáticos
└── main.tsx       # Ponto de entrada
```

### Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linter

### Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- React Router DOM
- React Icons

### Configurações do Vercel

O arquivo `vercel.json` já está configurado com:
- Build automático
- Roteamento para SPA
- Configurações de ambiente

### Variáveis de Ambiente

Se necessário, configure as seguintes variáveis no Vercel:
- `VITE_API_URL` - URL da API backend
- `NODE_ENV` - Ambiente (production/development)

### Suporte

Para dúvidas sobre o deploy, consulte a [documentação do Vercel](https://vercel.com/docs).
