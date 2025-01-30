'use client';

import { redirect } from 'next/navigation';

export default function Button({ id }: { id: number }) {
  const viewMore = () => redirect(`/details/${id}`);

  return (
    <button className="btn-action" onClick={viewMore}>
      VIEW MORE
    </button>
  );
}
