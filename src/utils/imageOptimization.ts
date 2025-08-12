// Utility functions for image optimization

export const preloadImages = (imageUrls: string[]): Promise<void> => {
  const imagePromises = imageUrls.map((src) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  });

  return Promise.all(imagePromises).then(() => {});
};

export const getImageLoadingStrategy = (index: number): 'eager' | 'lazy' => {
  return index === 0 ? 'eager' : 'lazy';
};

export const optimizeImageProps = (src: string, alt: string, index: number) => {
  return {
    src,
    alt,
    loading: getImageLoadingStrategy(index),
    decoding: 'async' as const,
  };
}; 