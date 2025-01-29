import { IconClock } from '@/icons/clock';
import { IconCog } from '@/icons/cog';
import { IconDrop } from '@/icons/drop';
import { IconWatch } from '@/icons/watch';
import { ISpecification } from '@/utils/types';
import styles from './styles.module.scss';

export default function Specifications({ specs }: { specs: ISpecification }) {
  return (
    <div className={styles.specs}>
      <div className={`${styles.card} ${styles.brand}`}>
        <div className={styles.title}>
          <IconWatch />
          <p>New Series from</p>
        </div>

        <span>
          <p>{specs.brand}</p>
          <p>{specs.brand}</p>
        </span>
      </div>

      <div className={`${styles.card} ${styles.waterResistance}`}>
        <div className={styles.title}>
          <IconDrop />
          <p>Water Resistance</p>
        </div>

        <span>
          <p>{specs.water_resistance}</p>
        </span>
      </div>

      <div className={`${styles.card} ${styles.materials}`}>
        <div className={styles.title}>
          <IconCog />
          <p>Built With</p>
        </div>

        <span>
          <p>
            {specs.case_material} & {specs.band_material}
          </p>
        </span>
      </div>

      <div className={`${styles.card} ${styles.looks}`}>
        <IconClock />
        <div>
          <p>Perfect your style with</p>
          <span style={{ color: specs.dial_color }}>{specs.dial_color}</span> dial{' '}
          <span>{specs.movement}</span>
          <p>watch</p>
        </div>
      </div>
    </div>
  );
}
