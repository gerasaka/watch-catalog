'use client';

import { IProduct } from '@/utils/types';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function Preview({ product }: { product: IProduct }) {
  const [highlighted, setHiglight] = useState(product.images[0]);

  const changeHighlight = (src: string) => {
    setHiglight(src);
  };

  return (
    <div className={styles.preview}>
      <Image
        src={highlighted}
        alt={product.name + 'big preview image'}
        height={300}
        width={300}
        priority
        className={styles.loaded}
      />

      <span className={styles.items}>
        {product.images.map((src, i) => {
          return (
            <Image
              key={i}
              src={src}
              alt={product.name + 'preview image' + i}
              height={100}
              width={100}
              onClick={() => changeHighlight(src)}
            />
          );
        })}
      </span>
    </div>
  );
}
