'use client';

import { IconBookmark } from '@/icons/bookmark';
import { IconBookmarkFill } from '@/icons/bookmark-fill';
import { useBookmarks } from '@/store/bookmark-context';
import { IProduct } from '@/utils/types';

export default function Bookmark({ product }: { product: IProduct }) {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const bookmarked = isBookmarked(product.id);

  return (
    <button
      className="btn-icon"
      onClick={() => (bookmarked ? removeBookmark(product.id) : addBookmark(product.id, product))}
    >
      {bookmarked ? <IconBookmarkFill /> : <IconBookmark />}
    </button>
  );
}
