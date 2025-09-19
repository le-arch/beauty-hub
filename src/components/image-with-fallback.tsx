'use client';

import { useState, useEffect } from 'react';
import Image, { type ImageProps } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbacksrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/600x400-rEp1jUkvHyLmlGQqMrRIeaFLngKRkn.png", alt, ...rest } = props;
  const [error, setError] = useState<React.SyntheticEvent<HTMLImageElement, Event> | null>(null);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      alt={alt}
      src={error ? fallbackSrc : imgSrc}
      onError={setError}
      {...rest}
    />
  );
};

export default ImageWithFallback;
