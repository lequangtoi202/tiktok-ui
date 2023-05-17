import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  const [fallBack, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    ></img>
  );
});

export default Image;
