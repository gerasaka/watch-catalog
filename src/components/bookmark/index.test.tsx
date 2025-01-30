import Bookmark from '@/components/bookmark';
import { BookmarkProvider, useBookmarks } from '@/store/bookmark-context';
import { IProduct } from '@/utils/types';
import { fireEvent, render, screen } from '@testing-library/react';
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
    render(
      <BookmarkProvider>
        <TestComponent />
      </BookmarkProvider>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(screen.getByText(/Bookmarked: true/)).toBeDefined();

    fireEvent.click(button);
    expect(screen.getByText(/Bookmarked: false/)).toBeDefined();
  });
});

// Helper component to track `isBookmarked` state
function TestComponent() {
  const { isBookmarked } = useBookmarks();
  return (
    <div>
      <Bookmark product={mockProduct} />
      <p>Bookmarked: {isBookmarked(mockProduct.id) ? 'true' : 'false'}</p>
    </div>
  );
}
