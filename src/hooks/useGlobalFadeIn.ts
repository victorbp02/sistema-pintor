import { useEffect, useRef } from 'react';

interface UseGlobalFadeInOptions {
  selector?: string;
  threshold?: number;
  rootMargin?: string;
  effect?: 'fade-up' | 'fade-down' | 'fade-scale';
  duration?: 'fast' | 'normal' | 'slow';
}

export function useGlobalFadeIn(options: UseGlobalFadeInOptions = {}) {
  const {
    selector = 'section, .section, [data-fade-in]',
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    effect = 'fade-up',
    duration = 'normal'
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Função para aplicar fade-in aos elementos
    const applyFadeIn = (element: Element) => {
      // Verificar se já tem fade-in aplicado
      if (element.classList.contains('fade-in-applied')) return;

      // Adicionar classes de fade-in
      element.classList.add('fade-in-applied');
      element.classList.add(`fade-in-${effect}`);
      element.classList.add(`fade-in-${duration}`);
      
      // Definir estado inicial
      element.style.opacity = '0';
      element.style.transform = getInitialTransform(effect);
      element.style.transition = getTransitionDuration(duration);
    };

    // Função para ativar o fade-in
    const activateFadeIn = (element: Element) => {
      element.classList.add('visible');
      element.style.opacity = '1';
      element.style.transform = 'none';
    };

    // Função para obter transform inicial baseado no efeito
    const getInitialTransform = (effectType: string) => {
      switch (effectType) {
        case 'fade-up':
          return 'translateY(50px)';
        case 'fade-down':
          return 'translateY(-50px)';
        case 'fade-scale':
          return 'scale(0.9)';
        default:
          return 'translateY(50px)';
      }
    };

    // Função para obter duração da transição
    const getTransitionDuration = (durationType: string) => {
      switch (durationType) {
        case 'fast':
          return 'opacity 0.8s ease-out, transform 0.8s ease-out';
        case 'slow':
          return 'opacity 2s ease-out, transform 2s ease-out';
        default:
          return 'opacity 1.5s ease-out, transform 1.5s ease-out';
      }
    };

    // Criar Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            
            // Aplicar fade-in se ainda não foi aplicado
            if (!element.classList.contains('fade-in-applied')) {
              applyFadeIn(element);
            }
            
            // Ativar o fade-in
            activateFadeIn(element);
            
            // Parar de observar após ativar
            observerRef.current?.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    // Observar todos os elementos que correspondem ao seletor
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [selector, threshold, rootMargin, effect, duration]);

  return observerRef.current;
}
