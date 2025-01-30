import { BookmarkProvider, useBookmarks } from '@/store/bookmark-context';
import { IProduct } from '@/utils/types';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

const mockProduct: IProduct = {
  id: 1,
  name: 'Watch 1',
  price: 100000,
  images: [],
  colors: [],
  rating: 4.5,
};

describe('BookmarkContext', () => {
  it('initialize with empty bookmarks', () => {
    const { result } = renderHook(() => useBookmarks(), { wrapper: BookmarkProvider });
    expect(result.current.bookmarks).toEqual({});
  });

  it('add a product to bookmarks', () => {
    const { result } = renderHook(() => useBookmarks(), { wrapper: BookmarkProvider });

    act(() => {
      result.current.addBookmark(mockProduct.id, mockProduct);
    });

    expect(result.current.bookmarks).toHaveProperty(`${mockProduct.id}`);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'cat-bookmark',
      JSON.stringify({ [mockProduct.id]: mockProduct })
    );
  });

  it('check if a product is bookmarked', () => {
    const { result } = renderHook(() => useBookmarks(), { wrapper: BookmarkProvider });

    act(() => {
      result.current.addBookmark(mockProduct.id, mockProduct);
    });

    expect(result.current.isBookmarked(mockProduct.id)).toBe(true);
  });

  it('remove a product from bookmarks', () => {
    const { result } = renderHook(() => useBookmarks(), { wrapper: BookmarkProvider });

    act(() => {
      result.current.addBookmark(mockProduct.id, mockProduct);
    });

    act(() => {
      result.current.removeBookmark(mockProduct.id);
    });

    expect(result.current.bookmarks).not.toHaveProperty(`${mockProduct.id}`);
    expect(localStorage.setItem).toHaveBeenCalledWith('cat-bookmark', JSON.stringify({}));
  });
});
