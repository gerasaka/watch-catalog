import { getProducts } from '@/utils/actions';
import ProductCard from './components/product-card';
import styles from './styles.module.scss';

export default async function CatalogPage() {
  const products = await getProducts();

  return (
    <>
      <h1>Product Catalog</h1>
      <p className="text-light">Find the best watch for your life!</p>

      <div className={styles.catalogueContainer}>
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
