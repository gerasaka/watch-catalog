import Bookmark from '@/components/bookmark';
import { BookmarkProvider, useBookmarks } from '@/store/bookmark-context';
import { IProduct } from '@/utils/types';
import { render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

const mockProduct: IProduct = {
  id: 1,
  name: 'Watch 1',
  price: 1000000,
  images: [],
  colors: [],
  rating: 4.5,
};

describe('Bookmark Component', () => {
  it('should update bookmark state when clicked', async () => {
    render(<Bookmark product={mockProduct} />, { wrapper: BookmarkProvider });

    const button = screen.getByRole('button');

    expect(button).toBeDefined();

    const { result } = renderHook(() => useBookmarks(), { wrapper: BookmarkProvider });
    expect(result.current.isBookmarked(mockProduct.id)).toBe(false);

    button.click();
    expect(result.current.isBookmarked(mockProduct.id)).toBe(true);

    button.click();
    expect(result.current.isBookmarked(mockProduct.id)).toBe(false);
  });
});
