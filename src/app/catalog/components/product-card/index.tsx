import { IconLabel } from '@/icons/label';
import { IconStarSolid } from '@/icons/star';
import { formatPrice } from '@/utils/functions';
import { IProduct } from '@/utils/types';
import Image from 'next/image';
import Button from '../button';
import styles from './styles.module.scss';

export default async function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className={styles.productItem}>
      <div className={styles.hero}>
        <div className={styles.rating}>
          <span
            className={
              product.rating < 1.5 ? 'text-red' : product.rating < 4 ? 'text-orange' : 'text-green'
            }
          >
            {product.rating}
          </span>
          <span className="text-light">
            <IconStarSolid /> rating
          </span>
        </div>

        <div className={styles.images}>
          {product.images.map((src, i) => {
            return (
              <Image
                key={i}
                className={styles.logo}
                src={src}
                alt={product.name + 'preview image' + i}
                width={100}
                height={100}
                loading="lazy"
              />
            );
          })}
        </div>
      </div>

      <p className="text-max-lines-2">{product.name}</p>
      <p className={`${styles.price} text-light`}>
        <IconLabel /> IDR {formatPrice(product.price)}
      </p>

      <Button id={product.id} />
    </div>
  );
}
