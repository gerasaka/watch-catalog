import { IProduct } from './types';

export async function getProducts(): Promise<IProduct[]> {
  try {
    const productRes = await fetch(
      'https://my-json-server.typicode.com/gerasaka/watch-catalog-db/products'
    );
    return productRes.json();
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
export async function getProductDetails(id: number): Promise<IProduct | object> {
  try {
    const productRes = await fetch(
      'https://my-json-server.typicode.com/gerasaka/watch-catalog-db/products'
    );

    const products = (await productRes.json()) as IProduct[];
    const productDetails = products.find((product) => product.id === id);

    return productDetails ?? {};
  } catch (err) {
    console.log(err);
    return {};
  }
}
