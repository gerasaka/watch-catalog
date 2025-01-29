import { IconClock } from '@/icons/clock';
import { IconCog } from '@/icons/cog';
import { IconDrop } from '@/icons/drop';
import { IconStarSolid } from '@/icons/star';
import { IconWatch } from '@/icons/watch';
import { getProductDetails, getProducts, getProductSpecs } from '@/utils/actions';
import { redirect } from 'next/navigation';
import styles from './styles.module.scss';

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: `${product.id}` }));
}

export default async function DetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const productId = (await params).slug;
  const product = await getProductDetails(Number(productId));
  const specs = await getProductSpecs(Number(productId));

  if (!product || !specs) redirect('/catalog'); // TODO: handle error api

  return (
    <div className={styles.product}>
      <div className={styles.preview}>
        <img src={product.images[0]} alt="" height={300} width={300} />

        <span className={styles.items}>
          {product.images.map((src) => {
            return <img src={src} alt="" height={100} width={100} />;
          })}
        </span>
      </div>

      <div className={styles.details}>
        <h1 className="text-max-lines-2">{product.name}</h1>
        <p>{product.price}</p>

        <div
          className={`${styles.rating} ${
            product.rating < 1.5 ? 'text-red' : product.rating < 4 ? 'text-orange' : 'text-green'
          }`}
        >
          <IconStarSolid />
          {product.rating}
        </div>

        {product.colors && (
          <div className={styles.color}>
            <p>Color</p>

            <div className={styles.container}>
              {product.colors.map((color, i) => {
                return (
                  <span
                    key={product.id + '+color+' + i}
                    className={styles.colorItem}
                    style={{ backgroundColor: color }}
                  ></span>
                );
              })}
            </div>
          </div>
        )}

        <button>GET YOURS!</button>
      </div>

      <div className={styles.specs}>
        <div className={`${styles.cardFill} ${styles.brand}`}>
          <div>
            <IconWatch />
            <p>New Series from</p>
          </div>

          <span>
            <p>{specs.brand}</p>
            <p>{specs.brand}</p>
          </span>
        </div>

        <div className={`${styles.card}`}>
          <div>
            <IconDrop />
            <p>Water Resistance</p>
          </div>

          <span>
            <p>{specs.water_resistance}</p>
          </span>
        </div>

        <div className={`${styles.card}`}>
          <div>
            <IconCog />
            <p>Built With</p>
          </div>

          <span>
            <p>
              {specs.case_material} & {specs.band_material}
            </p>
          </span>
        </div>

        <div className={`${styles.card}`}>
          <div>
            <IconClock />
            <p>
              Perfect your style with
              <span>
                {specs.dial_color} {specs.movement}
              </span>
              watch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
