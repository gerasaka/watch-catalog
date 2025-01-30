import { BookmarkProvider } from '@/store/bookmark-context';
import { formatPrice } from '@/utils/functions';
import { IProduct } from '@/utils/types';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProductCard from './index';

const mockProduct: IProduct = {
  id: 1,
  name: 'Watch a mala',
  images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
  colors: ['green', 'blue'],
  price: 500000,
  rating: 4.5,
};

describe('ProductCard Component', () => {
  render(<ProductCard product={mockProduct} />, { wrapper: BookmarkProvider });

  it('renders the product name', () => {
    expect(screen.getByText('Watch a mala')).toBeDefined();
  });

  it('renders the product images', () => {
    const images = screen.getAllByAltText(/preview image/);
    expect(images).toHaveLength(mockProduct.images.length);
  });

  it('displays the correct product rating', () => {
    expect(screen.getByText('4.5')).toBeDefined();
    expect(screen.getByText('rating')).toBeDefined();
  });

  it('correctly displays the formatted price', () => {
    const priceText = `IDR ${formatPrice(mockProduct.price)}`;
    expect(screen.getByText(priceText)).toBeDefined();
  });

  it('renders the bookmark and button', () => {
    // expect(screen.getByText('Bookmark')).toBeDefined();
    expect(screen.getByText('VIEW MORE')).toBeDefined();
  });
});
