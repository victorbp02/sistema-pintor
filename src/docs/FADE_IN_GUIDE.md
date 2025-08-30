# Guia de Uso do Sistema Fade-In

## Visão Geral

O sistema de fade-in foi implementado para proporcionar uma experiência de usuário mais suave e profissional, com animações de entrada automáticas em todas as páginas e componentes.

## Funcionalidades Implementadas

### 1. **Fade-In Global Automático**
- Todas as páginas agora carregam com efeito fade-in automático
- Aplicado através do componente `FadeInWrapper` no `App.tsx`
- Efeito padrão: `fade-up` com duração de 1.5s

### 2. **Classes CSS Reutilizáveis**
- `.fade-in` - Fade-in básico (1.5s)
- `.fade-in-fast` - Fade-in rápido (0.8s)
- `.fade-in-slow` - Fade-in lento (2s)
- `.fade-in-up` - Fade-in com movimento para cima
- `.fade-in-down` - Fade-in com movimento para baixo
- `.fade-in-scale` - Fade-in com efeito de escala
- `.fade-in-stagger` - Fade-in escalonado para múltiplos elementos

### 3. **Componente FadeInWrapper**
Wrapper reutilizável para aplicar fade-in em qualquer componente.

```tsx
import FadeInWrapper from './components/FadeInWrapper';

<FadeInWrapper effect="fade-up" duration="normal">
  <SeuComponente />
</FadeInWrapper>
```

**Props disponíveis:**
- `effect`: 'fade' | 'fade-up' | 'fade-down' | 'fade-scale'
- `duration`: 'fast' | 'normal' | 'slow'
- `className`: Classes CSS adicionais

### 4. **Hook useFadeIn**
Hook personalizado para fade-in com Intersection Observer.

```tsx
import { useFadeIn } from '../hooks/useFadeIn';

function MeuComponente() {
  const fadeInProps = useFadeIn({
    duration: 'normal',
    delay: 200,
    effect: 'fade-up',
    threshold: 0.1
  });

  return (
    <div ref={fadeInProps.ref} className={fadeInProps.className} style={fadeInProps.style}>
      Conteúdo do componente
    </div>
  );
}
```

## Como Usar

### Aplicação Automática (Já Implementada)
Todas as páginas já têm fade-in automático aplicado no `App.tsx`.

### Aplicação Manual em Componentes Específicos

#### Opção 1: Usando Classes CSS
```tsx
<div className="fade-in-up">
  Este elemento aparecerá com fade-in para cima
</div>

<div className="fade-in-stagger">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### Opção 2: Usando FadeInWrapper
```tsx
<FadeInWrapper effect="fade-scale" duration="slow">
  <div>Conteúdo com fade-in de escala lento</div>
</FadeInWrapper>
```

#### Opção 3: Usando Hook useFadeIn
```tsx
function ComponenteComFadeIn() {
  const fadeInProps = useFadeIn({
    duration: 'fast',
    effect: 'fade-down',
    delay: 300
  });

  return (
    <section ref={fadeInProps.ref} className={fadeInProps.className} style={fadeInProps.style}>
      <h2>Título com Fade-In</h2>
      <p>Conteúdo que aparece quando entra na viewport</p>
    </section>
  );
}
```

## Personalização

### Alterando Duração Global
Para alterar a duração padrão, modifique o valor no `global.css`:

```css
.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards; /* Altere 1.5s para o valor desejado */
}
```

### Criando Novos Efeitos
Adicione novos keyframes no `global.css`:

```css
@keyframes fadeInRotate {
  from {
    opacity: 0;
    transform: rotate(-10deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
}

.fade-in-rotate {
  opacity: 0;
  animation: fadeInRotate 1.5s ease-out forwards;
}
```

## Acessibilidade

O sistema respeita as preferências do usuário:
- Animações são desabilitadas para usuários que preferem `prefers-reduced-motion: reduce`
- Todas as animações são suaves e não causam desconforto visual

## Compatibilidade

- ✅ Chrome/Edge (versões modernas)
- ✅ Firefox (versões modernas)
- ✅ Safari (versões modernas)
- ✅ Mobile browsers
- ✅ Suporte a Intersection Observer

## Performance

- Animações usam `transform` e `opacity` para melhor performance
- Intersection Observer é usado para animações baseadas em scroll
- Animações são otimizadas para 60fps

## Exemplos Práticos

### Hero Section com Fade-In
```tsx
function Hero() {
  const heroFadeIn = useFadeIn({ effect: 'fade-up', delay: 100 });
  const titleFadeIn = useFadeIn({ effect: 'fade-down', delay: 300 });
  const buttonFadeIn = useFadeIn({ effect: 'fade-scale', delay: 500 });

  return (
    <section ref={heroFadeIn.ref} className={heroFadeIn.className} style={heroFadeIn.style}>
      <h1 ref={titleFadeIn.ref} className={titleFadeIn.className} style={titleFadeIn.style}>
        Título Principal
      </h1>
      <button ref={buttonFadeIn.ref} className={buttonFadeIn.className} style={buttonFadeIn.style}>
        Call to Action
      </button>
    </section>
  );
}
```

### Lista com Fade-In Escalonado
```tsx
<div className="fade-in-stagger">
  <div className="card">Card 1</div>
  <div className="card">Card 2</div>
  <div className="card">Card 3</div>
  <div className="card">Card 4</div>
</div>
```
