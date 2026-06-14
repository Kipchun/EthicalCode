import React, { CSSProperties } from 'react';

type IframeProps = {
  src: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  sandbox?: string;
  allow?: string;
  className?: string;
  style?: CSSProperties;
  onLoad?: () => void;
};

const Iframe: React.FC<IframeProps> = ({
  src,
  title = 'Embedded',
  width = '100%',
  height = 600,
  sandbox,
  allow,
  className,
  style,
  onLoad,
}) => {
  const heightValue = typeof height === 'number' ? `${height}px` : height;
  const widthValue = typeof width === 'number' ? `${width}px` : width;

  return (
    <iframe
      src={src}
      title={title}
      width={widthValue}
      height={heightValue}
      sandbox={sandbox}
      allow={allow}
      className={className}
      style={{ border: 0, ...(style || {}) }}
      onLoad={onLoad}
      loading="lazy"
    />
  );
};

export default Iframe;
