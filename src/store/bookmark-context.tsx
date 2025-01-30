'use client';

import { IProduct } from '@/utils/types';
import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'cat-bookmark';

type BookmarkContextType = {
  bookmarks: Record<number, IProduct>;
  isBookmarked: (id: number) => boolean;
  addBookmark: (id: number, product: IProduct) => void;
  removeBookmark: (id: number) => void;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Record<number, IProduct>>({});

  useEffect(() => {
    const storage = localStorage.getItem(STORAGE_KEY);

    if (storage) {
      try {
        setBookmarks(JSON.parse(storage));
      } catch {
        console.error('Failed parsing bookmark data');
      }
    }
  }, []);

  const isBookmarked = (id: number) => !!bookmarks[id];

  const addBookmark = (id: number, product: IProduct) => {
    const updated = { ...bookmarks, [id]: product };
    setBookmarks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const removeBookmark = (id: number) => {
    const updated = { ...bookmarks };
    delete updated[id];
    setBookmarks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, isBookmarked, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}
