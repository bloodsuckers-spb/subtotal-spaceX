import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <svg className={styles.icon}>
        <use href="sprite.svg#SpaceXLogo"></use>
      </svg>
    </header>
  );
};
