import { IconLabelSolid } from '@/icons/label';
import { IconStarSolid } from '@/icons/star';
import { IProduct } from '@/utils/types';
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
          <span>
            <IconStarSolid /> rating
          </span>
        </div>

        <div className={styles.images}>
          {product.images.map((src, i) => {
            return (
              //   <Image
              //   key={i}
              //   className={styles.logo}
              //   src={src}
              //   alt={product.name + 'preview image' + i}
              //   width={100}
              //   height={100}
              //   loading="lazy"
              // />
              <img
                key={i}
                src={src}
                alt={product.name + 'preview image' + i}
                role="presentation"
                loading="lazy"
                width={100}
                height={100}
              />
            );
          })}
        </div>
      </div>

      <p className="text-max-lines-2">{product.name}</p>
      <p className={styles.price}>
        <IconLabelSolid /> IDR {product.price}
      </p>

      <button>View More</button>
    </div>
  );
}
