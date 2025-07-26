# 🚀 Guia de Deploy no Vercel

## ✅ Configurações Realizadas

O projeto já está configurado para deploy no Vercel com os seguintes arquivos:

- ✅ `vercel.json` - Configuração do Vercel
- ✅ `.nvmrc` - Versão do Node.js (18)
- ✅ `.vercelignore` - Arquivos ignorados no deploy
- ✅ `package.json` - Scripts de build atualizados
- ✅ `tsconfig.app.json` - Configuração TypeScript otimizada

## 📋 Passos para Deploy

### 1. Preparação Local

```bash
# Verificar se tudo está funcionando
npm install
npm run build
```

### 2. Deploy no Vercel

#### Opção A: Via GitHub (Recomendado)

1. **Faça push do código para o GitHub:**
   ```bash
   git add .
   git commit -m "Configuração para deploy no Vercel"
   git push origin main
   ```

2. **Acesse [vercel.com](https://vercel.com) e faça login**

3. **Clique em "New Project"**

4. **Importe seu repositório do GitHub**

5. **Configure o projeto:**
   - **Framework Preset:** Vite
   - **Root Directory:** `/` (raiz do projeto)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

6. **Clique em "Deploy"**

#### Opção B: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

## 🔧 Configurações Importantes

### Variáveis de Ambiente (se necessário)

No painel do Vercel, vá em **Settings > Environment Variables** e adicione:

```
NODE_ENV=production
VITE_API_URL=https://sua-api-backend.vercel.app
```

### Domínio Personalizado

1. Vá em **Settings > Domains**
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruído

## 📁 Estrutura de Arquivos

```
sistema-pintor/
├── src/                    # Código fonte
├── public/                 # Arquivos públicos
├── dist/                   # Build de produção
├── vercel.json            # Configuração Vercel
├── .nvmrc                 # Versão Node.js
├── .vercelignore          # Arquivos ignorados
├── package.json           # Dependências e scripts
└── vite.config.ts         # Configuração Vite
```

## 🚨 Troubleshooting

### Erro de Build

Se o build falhar:

1. **Verifique os logs no Vercel**
2. **Teste localmente:** `npm run build`
3. **Verifique as dependências:** `npm install`

### Erro de Roteamento

Se as rotas não funcionarem:

1. **Verifique o `vercel.json`**
2. **Teste localmente:** `npm run preview`

### Problemas de Performance

1. **Otimize as imagens** (já estão otimizadas pelo Vite)
2. **Verifique o tamanho do bundle** (atualmente ~280KB gzipped)

## 📊 Monitoramento

Após o deploy, você pode:

- **Ver logs:** Dashboard do Vercel > Functions
- **Monitorar performance:** Analytics do Vercel
- **Configurar alertas:** Settings > Notifications

## 🔄 Deploy Automático

O Vercel fará deploy automático sempre que você fizer push para a branch principal.

## 📞 Suporte

- **Documentação Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Comunidade:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**🎉 Seu projeto está pronto para deploy no Vercel!** 