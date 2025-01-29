'use client';

import { IProduct } from '@/utils/types';
import styles from './styles.module.scss';

export default function ColorVariant({ colors }: { colors: IProduct['colors'] }) {
  return (
    <div className={`${styles.color} text-light`}>
      <p>Color variants</p>

      <div className={styles.container}>
        {colors.map((color, i) => {
          return (
            <span
              key={color + i}
              className={styles.colorItem}
              style={{ backgroundColor: color }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
