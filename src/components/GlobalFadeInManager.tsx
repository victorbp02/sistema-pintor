import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface GlobalFadeInManagerProps {
  selector?: string;
  threshold?: number;
  rootMargin?: string;
  effect?: 'fade-up' | 'fade-down' | 'fade-scale';
  duration?: 'fast' | 'normal' | 'slow';
}

export default function GlobalFadeInManager({
  selector = 'section, .hero, .blueSection, .showcaseSection, .whyChooseUsSection, .servicesSection, .reviewsSection, .teamSection, .partnersSection, .contactSection, .residentialSection, .servicesPageSection',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  effect = 'fade-up',
  duration = 'normal'
}: GlobalFadeInManagerProps) {
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Função para aplicar fade-in aos elementos
  const applyFadeIn = (element: Element) => {
    // Verificar se já tem fade-in aplicado
    if (element.classList.contains('fade-in-applied')) return;

    // Adicionar classes de fade-in
    element.classList.add('fade-in-applied');
    element.classList.add(`fade-in-${effect}`);
    
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

  // Função para inicializar o observer
  const initializeObserver = () => {
    // Limpar observer anterior se existir
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Criar novo Intersection Observer
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
  };

  useEffect(() => {
    // Pequeno delay para garantir que o DOM foi atualizado
    const timer = setTimeout(() => {
      initializeObserver();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [location.pathname, selector, threshold, rootMargin, effect, duration]);

  // Componente não renderiza nada visualmente
  return null;
}
