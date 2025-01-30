'use client';

import { redirect } from 'next/navigation';
import styles from './styles.module.scss';

export default function Back() {
  const back = () => redirect('/catalog');

  return (
    <button className={`btn-ghost ${styles.back}`} onClick={back}>
      &#8592; Back
    </button>
  );
}
