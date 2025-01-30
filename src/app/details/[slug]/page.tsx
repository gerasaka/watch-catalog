import Bookmark from '@/components/bookmark';
import { IconLabel } from '@/icons/label';
import { IconStarSolid } from '@/icons/star';
import { getProductDetails, getProducts, getProductSpecs } from '@/utils/actions';
import { formatPrice } from '@/utils/functions';
import { redirect } from 'next/navigation';
import Back from './components/back';
import ColorVariant from './components/color-variant';
import Preview from './components/preview';
import Specifications from './components/specifications';
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
    <>
      <Back />

      <div className={styles.product}>
        <Preview product={product} />

        <div className={styles.details}>
          <h1 className="text-max-lines-2">{product.name}</h1>
          <div className={styles.price}>
            <IconLabel />
            <p>IDR {formatPrice(product.price)}</p>
          </div>

          <hr />

          <div className={styles.info}>
            <div
              className={`${styles.rating} ${
                product.rating < 1.5
                  ? 'text-red'
                  : product.rating < 3.5
                  ? 'text-orange'
                  : 'text-green'
              }`}
            >
              <IconStarSolid />
              {product.rating}
            </div>

            <Bookmark product={product} />
          </div>

          {product.colors && <ColorVariant colors={product.colors} />}

          <button className="btn-action">GET YOURS</button>
        </div>

        <Specifications specs={specs} />
      </div>
    </>
  );
}
