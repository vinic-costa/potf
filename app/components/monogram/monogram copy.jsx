import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';
import iconSvg from './icon2.svg'; // Importando o SVG
import iconSvg2 from './icon4.svg;'

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="49"
      viewBox="0 0 26 28"
      ref={ref}
      {...props}
    >

      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
      {/* Incluindo o SVG existente */}
      <image href={iconSvg} width="100%" height="100%" clipPath={`url(#${clipId})`} />
    </svg>
  );
});
