import { IProduct, ISpecification } from './types';

export async function getProducts(): Promise<IProduct[]> {
  try {
    const products = await fetch(
      'https://my-json-server.typicode.com/gerasaka/watch-catalog-db/products'
    ).then((res) => res.json());

    return products;
  } catch (err) {
    console.log(err);
    return [];
  }
}

/**
 * Due to limitations of the mock server, the same API used for get the list of products
 * is used to fetch product details.
 * The response will return the product corresponding to the given ID from the list
 * of products.
 */
export async function getProductDetails(id: number): Promise<IProduct | null> {
  try {
    const products: IProduct[] = await fetch(
      'https://my-json-server.typicode.com/gerasaka/watch-catalog-db/products'
    ).then((res) => res.json());
    const productDetails = products.find((product) => product.id === id);

    return productDetails ?? null;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getProductSpecs(id: number) {
  try {
    const specifications: ISpecification[] = await fetch(
      'https://my-json-server.typicode.com/gerasaka/watch-catalog-db/specifications'
    ).then((res) => res.json());
    const productSpecs = specifications.find((specs) => specs.productId === id);

    return productSpecs ?? null;
  } catch (err) {
    console.log(err);
    return null;
  }
}
