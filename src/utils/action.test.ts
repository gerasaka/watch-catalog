import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { getProductDetails, getProducts, getProductSpecs } from './actions';
import { IProduct, ISpecification } from './types';

const mockProducts: IProduct[] = [
  { id: 1, name: 'Watch 1', images: [], colors: [], price: 1000000, rating: 4.5 },
  { id: 2, name: 'Watch 2', images: [], colors: [], price: 1500000, rating: 3.8 },
];

const mockSpecs: ISpecification[] = [
  {
    productId: 1,
    brand: 'Seiko',
    movement: 'Analog',
    water_resistance: '30m',
    case_material: 'Stainless Steel',
    band_material: 'Rubber',
    dial_color: 'Black',
  },
];

describe('actions', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    global.fetch = vi.fn();
  });

  it('fetches products successfully', async () => {
    (global.fetch as Mock).mockResolvedValue({ json: async () => mockProducts });

    const result = await getProducts();
    expect(result).toEqual(mockProducts);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('handles errors when fetching products', async () => {
    (global.fetch as Mock).mockRejectedValue(new Error('Network error'));

    const result = await getProducts();
    expect(result).toEqual([]); // Should return an empty array on error
  });

  it('fetches product details successfully', async () => {
    (global.fetch as Mock).mockResolvedValue({ json: async () => mockProducts });

    const result = await getProductDetails(1);
    expect(result).toEqual(mockProducts[0]);
  });

  it('returns null if product details are not found', async () => {
    (global.fetch as Mock).mockResolvedValue({ json: async () => mockProducts });

    const result = await getProductDetails(999); // ID not in mock data
    expect(result).toBeNull();
  });

  it('fetches product specifications successfully', async () => {
    (global.fetch as Mock).mockResolvedValue({ json: async () => mockSpecs });

    const result = await getProductSpecs(1);
    expect(result).toEqual(mockSpecs[0]);
  });

  it('returns null if product specs are not found', async () => {
    (global.fetch as Mock).mockResolvedValue({ json: async () => mockSpecs });

    const result = await getProductSpecs(999);
    expect(result).toBeNull();
  });

  it('handles errors when fetching specs', async () => {
    (global.fetch as Mock).mockRejectedValue(new Error('Network error'));

    const result = await getProductSpecs(1);
    expect(result).toBeNull();
  });
});
