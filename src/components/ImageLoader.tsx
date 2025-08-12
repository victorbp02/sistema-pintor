import React, { useState } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

export default function ImageLoader({ 
  src, 
  alt, 
  className, 
  style, 
  onLoad, 
  loading = 'lazy',
  decoding = 'async'
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`image-loader ${isLoading ? 'loading' : ''}`} style={style}>
      {isLoading && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      {hasError && (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          ...style,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  );
} 