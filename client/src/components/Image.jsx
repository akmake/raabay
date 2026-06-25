/**
 * Lightweight drop-in for next/image.
 * Supports the props the codebase uses: fill, width, height, priority, sizes.
 */
export default function Image({
  src,
  alt = '',
  fill,
  width,
  height,
  priority,
  sizes,
  style,
  className,
  ...rest
}) {
  const fillStyle = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
    : {};

  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={{ ...fillStyle, ...style }}
      {...rest}
    />
  );
}
